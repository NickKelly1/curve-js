import {ethers} from "ethers";
import { assert } from "chai";
import curve from "../src";
import { BN } from "../src/utils";
import { DictInterface } from "../lib/interfaces";
import { Pool } from "../src/pools";

const LENDING_POOLS = ['compound', 'usdt', 'y', 'busd', 'pax', 'aave', 'saave', 'ib'];
const META_POOLS = ['gusd', 'husd', 'usdk', 'usdn', 'musd', 'rsv', 'tbtc', 'dusd', 'pbtc', 'bbtc', 'obtc', 'ust', 'usdp', 'tusd', 'frax', 'lusd', 'busdv2', 'alusd', 'mim'];
const CRYPTO_POOLS = ['tricrypto2', 'eurtusd', 'crveth', 'cvxeth', 'xautusd', 'spelleth', 'teth'];
const FACTORY_META_POOLS = ['baoUSD-3CRV-f', 'ELONXSWAP3CRV-f', 'ibbtc/sbtcCRV-2-f'];
const FACTORY_CRYPTO_POOLS = ['YFIETH-fV2'];

const POLYGON_MAIN_POOLS = ['aave', 'ren', 'eurtusd'];
const POLYGON_FACTORY_META_POOLS = ['FRAX3CRV-f3CRV-f'];

// const ETHEREUM_POOLS = [...LENDING_POOLS, ...META_POOLS, ...CRYPTO_POOLS];
const ETHEREUM_POOLS = FACTORY_CRYPTO_POOLS;
const POLYGON_POOLS = POLYGON_FACTORY_META_POOLS;

const wrappedLiquidityTest = (name: string) => {
    describe(`${name} add/remove liquidity`, function () {
        let pool: Pool;
        let coinAddresses: string[];

        before(async function () {
            pool = new curve.Pool(name);
            coinAddresses = pool.coinAddresses;
        });

        it('Adds liquidity', async function () {
            const amount = '10';
            const amounts = coinAddresses.map(() => amount);
            const initialBalances = await pool.balances() as DictInterface<string>;
            const lpTokenExpected = await pool.addLiquidityWrappedExpected(amounts)

            await pool.addLiquidityWrapped(amounts);

            const balances = await pool.balances() as DictInterface<string>;

            pool.coins.forEach((c: string) => {
                if (['aave', 'saave'].includes(name) || (curve.chainId === 137 && pool.name === 'ren')) {
                    // Because of increasing quantity
                    assert.approximately(Number(BN(balances[c])), Number(BN(initialBalances[c]).minus(BN(amount).toString())), 1e-2);
                } else if (pool.name === 'ibbtc/sbtcCRV') {
                    assert.approximately(Number(BN(balances[c])), Number(BN(initialBalances[c]).minus(BN(amount).toString())), 1e-18);
                } else {
                    assert.deepStrictEqual(BN(balances[c]), BN(initialBalances[c]).minus(BN(amount)));
                }
            })

            const delta = name === 'ELONXSWAP3CRV' ? 2 : 0.01
            assert.approximately(Number(balances.lpToken) - Number(initialBalances.lpToken), Number(lpTokenExpected), delta);
        });

        it('Deposits into gauge', async function () {
            if (pool.gauge === ethers.constants.AddressZero) {
                console.log('Skip');
                return
            }

            const depositAmount: string = (await pool.lpTokenBalances() as DictInterface<string>).lpToken;

            await pool.gaugeDeposit(depositAmount);

            const balances = await pool.lpTokenBalances();

            assert.strictEqual(depositAmount, balances.gauge);
            assert.strictEqual(Number(balances.lpToken), 0);
        });

        it('Withdraws from gauge', async function () {
            if (pool.gauge === ethers.constants.AddressZero) {
                console.log('Skip');
                return
            }

            const withdrawAmount: string = (await pool.lpTokenBalances() as DictInterface<string>).gauge;

            await pool.gaugeWithdraw(withdrawAmount);

            const balances = await pool.lpTokenBalances();

            assert.strictEqual(withdrawAmount, balances.lpToken);
            assert.strictEqual(Number(balances.gauge), 0);
        });

        it('Removes liquidity', async function () {
            const initialBalances = await pool.balances() as DictInterface<string>;
            const lpTokenAmount: string = BN(initialBalances.lpToken).div(10).toFixed(18);
            const coinsExpected = await pool.removeLiquidityWrappedExpected(lpTokenAmount);

            await pool.removeLiquidityWrapped(lpTokenAmount);

            const balances = await pool.balances() as DictInterface<string>;

            assert.deepStrictEqual(BN(balances.lpToken), BN(initialBalances.lpToken).minus(BN(lpTokenAmount)));
            pool.coins.forEach((c: string, i: number) => {
                const delta = name == 'gusd' ? 0.011 : name === 'ELONXSWAP3CRV' ? 2 : 0.01
                assert.approximately(Number(balances[c]) - Number(initialBalances[c]), Number(coinsExpected[i]), delta);
            });
        });

        it('Removes liquidity imbalance', async function () {
            if (pool.isCrypto) {
                console.log("No such method")
            } else {
                const amount = '1';
                const amounts = coinAddresses.map(() => amount);
                const initialBalances = await pool.balances() as DictInterface<string>;
                const lpTokenExpected = await pool.removeLiquidityImbalanceWrappedExpected(amounts);

                await pool.removeLiquidityImbalanceWrapped(amounts);

                const balances = await pool.balances() as DictInterface<string>;

                const delta = name === 'ELONXSWAP3CRV' ? 2 : 0.01
                assert.approximately(Number(initialBalances.lpToken) - Number(balances.lpToken), Number(lpTokenExpected), delta);
                pool.coins.forEach((c: string) => {
                    if (['aave', 'saave'].includes(name) || (curve.chainId === 137 && pool.name === 'ren')) {
                        assert.approximately(Number(initialBalances[c]), Number(BN(balances[c]).minus(BN(amount)).toString()), 1e-4);
                    } else {
                        assert.deepStrictEqual(BN(initialBalances[c]), BN(balances[c]).minus(BN(amount)));
                    }
                });
            }
        });

        if (!['compound', 'usdt', 'y', 'busd', 'pax'].includes(name)) {
            it('Removes liquidity one coin', async function () {
                const initialBalances = await pool.balances() as DictInterface<string>;
                const lpTokenAmount: string = BN(initialBalances.lpToken).div(10).toFixed(18);
                const expected = await pool.removeLiquidityOneCoinWrappedExpected(lpTokenAmount, 0);

                await pool.removeLiquidityOneCoinWrapped(lpTokenAmount, 0);

                const balances = await pool.balances() as DictInterface<string>;

                assert.deepStrictEqual(BN(balances.lpToken), BN(initialBalances.lpToken).minus(BN(lpTokenAmount)));
                pool.coins.forEach((c: string, i: number) => {
                    if (i === 0) {
                        assert.approximately(Number(balances[c]) - Number(initialBalances[c]), Number(expected), 0.01);
                    } else {
                        if (['aave', 'saave'].includes(name)  || (curve.chainId === 137 && this.name === 'ren')) {
                            // Because of increasing quantity
                            assert.approximately(Number(balances[c]), Number(initialBalances[c]), 1e-4);
                        } else {
                            assert.strictEqual(balances[c], initialBalances[c]);
                        }
                    }
                })
            });
        }
    });
}

const wrappedExchangeTest = (name: string) => {
    describe(`${name} exchange`, function () {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (i !== j) {
                    it(`${i} --> ${j}`, async function () {
                        const pool = new curve.Pool(name);
                        const coinAddresses = pool.coinAddresses;
                        if (i >= coinAddresses.length || j >= coinAddresses.length) {
                            console.log('Skip')
                        } else {
                            const swapAmount = '10';
                            const initialCoinBalances = await pool.coinBalances() as DictInterface<string>;
                            const expected = await pool.exchangeWrappedExpected(i, j, swapAmount);

                            await pool.exchangeWrapped(i, j, swapAmount, 0.02);

                            const coinBalances = await pool.coinBalances() as DictInterface<string>;

                            if (['aave', 'saave'].includes(pool.name) || (curve.chainId === 137 && pool.name === 'ren')) {
                                // Because of increasing quantity
                                assert.approximately(Number(Object.values(coinBalances)[i]), Number(BN(Object.values(initialCoinBalances)[i]).minus(BN(swapAmount).toString())), 1e-2);
                            } else if (pool.name === 'ibbtc/sbtcCRV') {
                                assert.approximately(Number(Object.values(coinBalances)[i]), Number(BN(Object.values(initialCoinBalances)[i]).minus(BN(swapAmount)).toString()), 1e-18);
                            } else {
                                assert.deepStrictEqual(BN(Object.values(coinBalances)[i]), BN(Object.values(initialCoinBalances)[i]).minus(BN(swapAmount)));
                            }
                            assert.isAtLeast(Number(Object.values(coinBalances)[j]), Number(BN(Object.values(initialCoinBalances)[j]).plus(BN(expected).times(0.98)).toString()));
                        }
                    });
                }
            }
        }
    });
}

describe('Wrapped test', async function () {
    this.timeout(120000);

    before(async function () {
        await curve.init('JsonRpc', {}, { gasPrice: 0 });
        // await curve.fetchFactoryPools();
        await curve.fetchCryptoFactoryPools();
    });

    for (const poolName of ETHEREUM_POOLS) {
        wrappedLiquidityTest(poolName);
        wrappedExchangeTest(poolName);
    }

    // for (const poolName of POLYGON_POOLS) {
    //     wrappedLiquidityTest(poolName);
    //     wrappedExchangeTest(poolName);
    // }
})
