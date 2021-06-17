// import config from '../config';
import compoundDepositABI from './json/compound/deposit.json';
import compoundMigrationABI from './json/compound/migration.json';
import compoundSwapABI from './json/compound/swap.json';
import compoundOldSwapABI from './json/compound/oldSwap.json';
import usdtDepositABI from './json/usdt/deposit.json';
import usdtSwapABI from './json/usdt/swap.json';
import iearnDepositABI from './json/iearn/deposit.json';
import iearnSwapABI from './json/iearn/swap.json';
import iearnSCurveRewardsABI from './json/iearn/sCurveRewards.json';
import aRewards_abi from './json/aRewards.json';
import busdDepositABI from './json/busd/deposit.json';
import busdSwapABI from './json/busd/swap.json';
import susdv2DepositABI from './json/susdv2/deposit.json';
import susdv2SwapABI from './json/susdv2/swap.json';
import susdv2SCurveRewards_abi from './json/susdv2/sCurveRewards.json';
import paxDepositABI from './json/pax/deposit.json';
import paxSwapABI from './json/pax/swap.json';
import renSwapABI from './json/ren/swap.json';
import renAdapterABI from './json/ren/adapter.json';
import sbtcSwapABI from './json/sbtc/swap.json';
import sbtcAdapterABI from './json/sbtc/adapter.json';
import sbtcSCurveRewardsABI from './json/sbtc/sCurveRewards.json';
import hbtcSwapABI from './json/hbtc/swap.json';
import tripoolSwapABI from './json/3pool/swap.json';
import gusdSwapABI from './json/gusd/swap.json';
import gusdDepositABI from './json/gusd/deposit.json';
import husdSwapABI from './json/husd/swap.json';
import husdDepositABI from './json/husd/deposit.json';
import usdkSwapABI from './json/usdk/swap.json';
import usdkDepositABI from './json/usdk/deposit.json';
import usdnSwapABI from './json/usdn/swap.json';
import usdnDepositABI from './json/usdn/deposit.json';
import linkusdSwapABI from './json/linkusd/swap.json';
import linkusdDepositABI from './json/linkusd/deposit.json';
import musdSwapABI from './json/musd/swap.json';
import musdDepositABI from './json/musd/deposit.json';
import musdSCurveRewards_abi from './json/musd/sCurveRewards.json';
import rsvSwapABI from './json/rsv/swap.json';
import rsvDepositABI from './json/rsv/deposit.json';
import rsvSCurveRewards_abi from './json/rsv/sCurveRewards.json';
import tbtcSwapABI from './json/tbtc/swap.json';
import tbtcDepositABI from './json/tbtc/deposit.json';
import tbtcSCurveRewards_abi from './json/tbtc/sCurveRewards.json';
import dusdSwapABI from './json/dusd/swap.json';
import dusdDepositABI from './json/dusd/deposit.json';
import dusdSCurveRewards_abi from './json/dusd/sCurveRewards.json';
import pbtcSwapABI from './json/pbtc/swap.json';
import pbtcDepositABI from './json/pbtc/deposit.json';
import pbtcSCurveRewards_abi from './json/pbtc/sCurveRewards.json';
import bbtcSwapABI from './json/bbtc/swap.json';
import bbtcDepositABI from './json/bbtc/deposit.json';
import obtcSwapABI from './json/obtc/swap.json';
import obtcDepositABI from './json/obtc/deposit.json';
import obtcSCurveRewards_abi from './json/obtc/sCurveRewards.json';
import sethSwapABI from './json/seth/swap.json';
import eursSwapABI from './json/eurs/swap.json';
import eursSCurveRewards_abi from './json/eurs/sCurveRewards.json';
import ustSwapABI from './json/ust/swap.json';
import ustDepositABI from './json/ust/deposit.json';
import aaveSwapABI from './json/aave/swap.json';
import idleSwapABI from './json/idle/swap.json';
import stethSwapABI from './json/steth/swap.json';
import stethSCurveRewards_abi from './json/steth/sCurveRewards.json';
import saaveSwapABI from './json/saave/swap.json';
import ankrethSwapABI from './json/ankreth/swap.json';
import ankrethSCurveRewards_abi from './json/ankreth/sCurveRewards.json';
import usdpSwapABI from './json/usdp/swap.json';
import usdpDepositABI from './json/usdp/deposit.json';
import ibSwapABI from './json/ib/swap.json';
import linkSwapABI from './json/link/swap.json';
import tusdSwapABI from './json/tusd/swap.json';
import tusdDepositABI from './json/tusd/deposit.json';
import fraxSwapABI from './json/frax/swap.json';
import fraxDepositABI from './json/frax/deposit.json';
import busdv2SwapABI from './json/busdv2/swap.json';
import busdv2DepositABI from './json/busdv2/deposit.json';
import lusdSwapABI from './json/lusd/swap.json';
import lusdDepositABI from './json/lusd/deposit.json';
import lusdRewardsabi from './json/lusd/rewards.json';
import { PoolDataInterface } from "../../interfaces";


// const infura_url = config.rpcUrl;
const infura_url = '<infura_url>';

//rinkeby multicall 0x0ae6578785868f88478B6bCe8227d6F85703092b
const multicall_address = '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441';

const poolsData: { [index: string]: PoolDataInterface } = {
    compound: {
        N_COINS: 2,
        underlying_decimals: [18, 6],
        decimals: [8, 8],
        use_lending: [true, true],
        is_plain: [false, false],
        old_swap_address: '0x2e60CF74d81ac34eB21eEff58Db4D385920ef419',
        swap_address: '0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56',
        token_address: '0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2',
        gauge_address: '0x7ca5b0a2910B33e9759DC7dDB0413949071D7575',
        old_token_address: '0x3740fb63ab7a09891d7c0d4299442A551D06F5fD',
        migration_address: '0x54Ee22d5593FC76fB20EafAb66C45aAb3268B800',
        infura_url,
        underlying_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        ],
        coins: [
            '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
            '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
        ],
        deposit_address: '0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06',
        deposit_abi: compoundDepositABI,
        migration_abi: compoundMigrationABI,
        swap_abi: compoundSwapABI,
        old_swap_abi: compoundOldSwapABI,
    },

    usdt: {
        N_COINS: 3,
        underlying_decimals: [18, 6, 6],
        decimals: [8, 8, 6],
        use_lending: [true, true, false],
        tethered: [false, false, true],
        is_plain: [false, false, true],
        swap_address: '0x52EA46506B9CC5Ef470C5bf89f17Dc28bB35D85C',
        token_address: '0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23',
        gauge_address: '0xBC89cd85491d81C6AD2954E6d0362Ee29fCa8F53',
        infura_url,
        underlying_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        coins: [
            '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
            '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        deposit_address: '0xac795D2c97e60DF6a99ff1c814727302fD747a80',
        deposit_abi: usdtDepositABI,
        swap_abi: usdtSwapABI,
    },

    y: {
        N_COINS: 4,
        underlying_decimals: [18, 6, 6, 18],
        decimals: [18, 6, 6, 18],
        use_lending: [true, true, true, true],
        tethered: [false, false, true, false],
        is_plain: [false, false, false, false],
        swap_address: '0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51',
        token_address: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
        gauge_address: '0xFA712EE4788C042e2B7BB55E6cb8ec569C4530c1',
        infura_url,
        underlying_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            '0x0000000000085d4780B73119b644AE5ecd22b376',
        ],
        coins: [
            '0x16de59092dAE5CcF4A1E6439D611fd0653f0Bd01',
            '0xd6aD7a6750A7593E092a9B218d66C0A814a3436e',
            '0x83f798e925BcD4017Eb265844FDDAbb448f1707D',
            '0x73a052500105205d34Daf004eAb301916DA8190f',
        ],
        deposit_address: '0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3',
        deposit_abi: iearnDepositABI,
        swap_abi: iearnSwapABI,
        sCurveRewards_abi: iearnSCurveRewardsABI,
        sCurveRewards_address: '0x0001FB050Fe7312791bF6475b96569D83F695C9f',
        aRewards_abi: aRewards_abi,
        aRewards_address: '0xcc9efea3ac5df6ad6a656235ef955fbfef65b862',
    },
    busd: {
        N_COINS: 4,
        underlying_decimals: [18, 6, 6, 18],
        decimals: [18, 6, 6, 18],
        use_lending: [true, true, true, true],
        tethered: [false, false, true, false],
        is_plain: [false, false, false, false],
        swap_address: '0x79a8C46DeA5aDa233ABaFFD40F3A0A2B1e5A4F27',
        token_address: '0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B',
        gauge_address: '0x69Fb7c45726cfE2baDeE8317005d3F94bE838840',
        infura_url,
        underlying_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
        ],
        coins: [
            '0xC2cB1040220768554cf699b0d863A3cd4324ce32',
            '0x26EA744E5B887E5205727f55dFBE8685e3b21951',
            '0xE6354ed5bC4b393a5Aad09f21c46E101e692d447',
            '0x04bC0Ab673d88aE9dbC9DA2380cB6B79C4BCa9aE',
        ],
        deposit_address: '0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB',
        deposit_abi: busdDepositABI,
        swap_abi: busdSwapABI,
    },

    susd: {
        swap_abi: susdv2SwapABI,
        deposit_abi: susdv2DepositABI,
        N_COINS: 4,
        underlying_decimals: [18, 6, 6, 18],
        decimals: [18, 6, 6, 18],
        tethered: [false, false, true, false],
        use_lending: [false, false, false, false],
        is_plain: [true, true, true, true],
        swap_address: '0xA5407eAE9Ba41422680e2e00537571bcC53efBfD',
        token_address: '0xC25a3A3b969415c80451098fa907EC722572917F',
        gauge_address: '0xA90996896660DEcC6E997655E065b23788857849',
        infura_url,
        deposit_address: '0xFCBa3E75865d2d561BE8D220616520c171F12851',
        underlying_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
        ],
        coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
        ],
        sCurveRewards_abi: susdv2SCurveRewards_abi,
        sCurveRewards_address: '0xdcb6a51ea3ca5d3fd898fd6564757c7aaec3ca92',
    },

    pax: {
        swap_abi: paxSwapABI,
        deposit_abi: paxDepositABI,
        N_COINS: 4,
        underlying_decimals: [18, 6, 6, 18],
        decimals: [18, 6, 6, 18],
        tethered: [false, false, true, false],
        use_lending: [true, true, true, false],
        is_plain: [false, false, false, true],
        swap_address: '0x06364f10B501e868329afBc005b3492902d6C763',
        token_address: '0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8',
        gauge_address: '0x64E3C23bfc40722d3B649844055F1D51c1ac041d',
        infura_url,
        deposit_address: '0xA50cCc70b6a011CffDdf45057E39679379187287',
        underlying_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
        ],
        coins: [
            '0x99d1Fa417f94dcD62BfE781a1213c092a47041Bc',
            '0x9777d7E2b60bB01759D0E2f8be2095df444cb07E',
            '0x1bE5d71F2dA660BFdee8012dDc58D024448A0A59',
            '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
        ],
    },

    ren: {
        N_COINS: 2,
        underlying_decimals: [8, 8],
        decimals: [8, 8],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x93054188d876f558f4a66B2EF1d97d16eDf0895B',
        token_address: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
        gauge_address: '0xB1F2cdeC61db658F091671F5f199635aEF202CAC',
        infura_url,
        underlying_coins: [
            '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        ],
        coins: [
            '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        ],
        swap_abi: renSwapABI,
        adapterABI: renAdapterABI,
        oldAdapterAddress: '0x9fe350DfA5F66bC086243F21A8F0932514316627',
        adapterBiconomyAddress: '0x73aB2Bd10aD10F7174a1AD5AFAe3ce3D991C5047',
        adapterAddress: '0x26D9980571e77FfB0349f9c801DD7ca9951Fb656',
    },

    sbtc: {
        N_COINS: 3,
        underlying_decimals: [8, 8, 18],
        decimals: [8, 8, 18],
        tethered: [false, false, false],
        use_lending: [false, false, false],
        is_plain: [true, true, true],
        swap_address: '0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714',
        token_address: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
        gauge_address: '0x705350c4BcD35c9441419DdD5d2f097d7a55410F',
        infura_url,
        underlying_coins: [
            '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
        ],
        coins: [
            '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
        ],
        swap_abi: sbtcSwapABI,
        adapterABI: sbtcAdapterABI,
        oldAdapterAddress: '0x104c1E66c67c385E6095FFcC6227D75c761DC019',
        adapterBiconomyAddress: '0xAEade605D01FE9a8e9C4B3AA0130A90d62167029',
        adapterAddress: '0x02B3F51AC9202aA19be63d61A8C681579D6E3a51',
        sCurveRewards_abi: sbtcSCurveRewardsABI,
        sCurveRewards_address: '0x13C1542A468319688B89E323fe9A3Be3A90EBb27',
    },

    hbtc: {
        swap_abi: hbtcSwapABI,
        N_COINS: 2,
        underlying_decimals: [18, 8],
        decimals: [18, 8],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F',
        token_address: '0xb19059ebb43466C323583928285a49f558E572Fd',
        gauge_address: '0x4c18E409Dc8619bFb6a1cB56D114C3f592E0aE79',
        infura_url,
        underlying_coins: [
            '0x0316EB71485b0Ab14103307bf65a021042c6d380',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        ],
        coins: [
            '0x0316EB71485b0Ab14103307bf65a021042c6d380',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        ],
    },

    '3pool': {
        swap_abi: tripoolSwapABI,
        N_COINS: 3,
        underlying_decimals: [18, 6, 6],
        decimals: [18, 6, 6],
        tethered: [false, false, true],
        use_lending: [false, false, false],
        is_plain: [true, true, true],
        swap_address: '0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7',
        token_address: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        gauge_address: '0xbFcF63294aD7105dEa65aA58F8AE5BE2D9d0952A',
        infura_url,
        underlying_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
    },

    gusd: {
        N_COINS: 2,
        underlying_decimals: [2, 18],
        decimals: [2, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956',
        token_address: '0xD2967f45c4f384DEEa880F807Be904762a3DeA07',
        gauge_address: '0xC5cfaDA84E902aD92DD40194f0883ad49639b023',
        infura_url,
        underlying_coins: [
            '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        swap_abi: gusdSwapABI,
        deposit_abi: gusdDepositABI,
        deposit_address: '0x64448B78561690B70E17CBE8029a3e5c1bB7136e',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [2, 18, 18, 6, 6],
        meta_coin_decimals: [2, 18, 6, 6],
        meta_wrapped_decimals: [2, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
    },

    husd: {
        N_COINS: 2,
        underlying_decimals: [8, 18],
        decimals: [8, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604',
        token_address: '0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858',
        gauge_address: '0x2db0E83599a91b508Ac268a6197b8B14F5e72840',
        infura_url,
        underlying_coins: [
            '0xdF574c24545E5FfEcb9a659c229253D4111d87e1',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0xdF574c24545E5FfEcb9a659c229253D4111d87e1',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        swap_abi: husdSwapABI,
        deposit_abi: husdDepositABI,
        deposit_address: '0x09672362833d8f703D5395ef3252D4Bfa51c15ca',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [8, 18, 18, 6, 6],
        meta_coin_decimals: [8, 18, 6, 6],
        meta_wrapped_decimals: [8, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0xdF574c24545E5FfEcb9a659c229253D4111d87e1',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
    },

    usdk: {
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb',
        token_address: '0x97E2768e8E73511cA874545DC5Ff8067eB19B787',
        gauge_address: '0xC2b1DF84112619D190193E48148000e3990Bf627',
        infura_url,
        underlying_coins: [
            '0x1c48f86ae57291F7686349F12601910BD8D470bb',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0x1c48f86ae57291F7686349F12601910BD8D470bb',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        swap_abi: usdkSwapABI,
        deposit_abi: usdkDepositABI,
        deposit_address: '0xF1f85a74AD6c64315F85af52d3d46bF715236ADc',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [18, 18, 18, 6, 6],
        meta_coin_decimals: [18, 18, 6, 6],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0x1c48f86ae57291F7686349F12601910BD8D470bb',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
    },

    usdn: {
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1',
        token_address: '0x4f3E8F405CF5aFC05D68142F3783bDfE13811522',
        gauge_address: '0xF98450B5602fa59CC66e1379DFfB6FDDc724CfC4',
        infura_url,
        underlying_coins: [
            '0x674C6Ad92Fd080e4004b2312b45f796a192D27a0',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0x674C6Ad92Fd080e4004b2312b45f796a192D27a0',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        swap_abi: usdnSwapABI,
        deposit_abi: usdnDepositABI,
        deposit_address: '0x094d12e5b541784701FD8d65F11fc0598FBC6332',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [18, 18, 18, 6, 6],
        meta_coin_decimals: [18, 18, 6, 6],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0x674C6Ad92Fd080e4004b2312b45f796a192D27a0',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
    },

    linkusd: {
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171',
        token_address: '0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F',
        gauge_address: '0x936734ea750bb194ddb4892b191b6bd5c43a3985',
        infura_url,
        underlying_coins: [
            '0x0E2EC54fC0B509F445631Bf4b91AB8168230C752',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0x0E2EC54fC0B509F445631Bf4b91AB8168230C752',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        swap_abi: linkusdSwapABI,
        deposit_abi: linkusdDepositABI,
        deposit_address: '0x1de7f0866e2c4adAC7b457c58Cc25c8688CDa1f2',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [18, 18, 18, 6, 6],
        meta_coin_decimals: [18, 18, 6, 6],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0x0E2EC54fC0B509F445631Bf4b91AB8168230C752',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
    },

    musd: {
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6',
        token_address: '0x1AEf73d49Dedc4b1778d0706583995958Dc862e6',
        gauge_address: '0x5f626c30EC1215f4EdCc9982265E8b1F411D1352',
        infura_url,
        underlying_coins: [
            '0xe2f2a5C287993345a840Db3B0845fbC70f5935a5',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0xe2f2a5C287993345a840Db3B0845fbC70f5935a5',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        swap_abi: musdSwapABI,
        deposit_abi: musdDepositABI,
        deposit_address: '0x803A2B40c5a9BB2B86DD630B274Fa2A9202874C2',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [18, 18, 18, 6, 6],
        meta_coin_decimals: [18, 18, 6, 6],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0xe2f2a5C287993345a840Db3B0845fbC70f5935a5',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        sCurveRewards_abi: musdSCurveRewards_abi,
        sCurveRewards_address: "0xE6E6E25EfdA5F69687aA9914f8d750C523A1D261",
    },

    rsv: {
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0xC18cC39da8b11dA8c3541C598eE022258F9744da',
        token_address: '0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35',
        gauge_address: '0x4dC4A289a8E33600D8bD4cf5F6313E43a37adec7',
        infura_url,
        underlying_coins: [
            '0x196f4727526eA7FB1e17b2071B3d8eAA38486988',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0x196f4727526eA7FB1e17b2071B3d8eAA38486988',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        swap_abi: rsvSwapABI,
        deposit_abi: rsvDepositABI,
        deposit_address: '0xBE175115BF33E12348ff77CcfEE4726866A0Fbd5',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [18, 18, 18, 6, 6],
        meta_coin_decimals: [18, 18, 6, 6],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0x196f4727526eA7FB1e17b2071B3d8eAA38486988',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        sCurveRewards_abi: rsvSCurveRewards_abi,
        sCurveRewards_address: "0xAD4768F408dD170e62E074188D81A29AE31B8Fd8",
    },

    tbtc: {
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0xC25099792E9349C7DD09759744ea681C7de2cb66',
        token_address: '0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd',
        gauge_address: '0x6828bcF74279eE32f2723eC536c22c51Eed383C6',
        infura_url,
        underlying_coins: [
            '0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa',
            '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
        ],
        coins: [
            '0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa',
            '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
        ],
        swap_abi: tbtcSwapABI,
        deposit_abi: tbtcDepositABI,
        deposit_address: '0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c',
        is_meta: true,
        meta_N: 5,
        base_pool: 'sbtc',
        meta_decimals: [18, 18, 8, 8, 18],
        meta_coin_decimals: [18, 8, 8, 18],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
        ],
        all_coins: [
            '0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa',
            '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
            '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
        ],
        sCurveRewards_abi: tbtcSCurveRewards_abi,
        sCurveRewards_address: '0xAF379f0228ad0d46bB7B4f38f9dc9bCC1ad0360c',
    },

    dusd: {
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c',
        token_address: '0x3a664Ab939FD8482048609f652f9a0B0677337B9',
        gauge_address: '0xAEA6c312f4b3E04D752946d329693F7293bC2e6D',
        infura_url,
        underlying_coins: [
            '0x5BC25f649fc4e26069dDF4cF4010F9f706c23831',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0x5BC25f649fc4e26069dDF4cF4010F9f706c23831',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        swap_abi: dusdSwapABI,
        deposit_abi: dusdDepositABI,
        deposit_address: '0x61E10659fe3aa93d036d099405224E4Ac24996d0',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [18, 18, 18, 6, 6],
        meta_coin_decimals: [18, 18, 6, 6],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0x5BC25f649fc4e26069dDF4cF4010F9f706c23831',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        sCurveRewards_abi: dusdSCurveRewards_abi,
        sCurveRewards_address: "0xd9Acb0BAeeD77C99305017821167674Cc7e82f7a",
    },

    pbtc: {
        swap_abi: pbtcSwapABI,
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x7F55DDe206dbAD629C080068923b36fe9D6bDBeF',
        token_address: '0xDE5331AC4B3630f94853Ff322B66407e0D6331E8',
        gauge_address: '0xd7d147c6Bb90A718c3De8C0568F9B560C79fa416',
        infura_url,
        underlying_coins: [
            '0x5228a22e72ccC52d415EcFd199F99D0665E7733b',
            '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
        ],
        coins: [
            '0x5228a22e72ccC52d415EcFd199F99D0665E7733b',
            '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
        ],
        deposit_abi: pbtcDepositABI,
        deposit_address: '0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C',
        is_meta: true,
        meta_N: 5,
        base_pool: 'sbtc',
        meta_decimals: [18, 18, 8, 8, 18],
        meta_coin_decimals: [18, 8, 8, 18],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
        ],
        all_coins: [
            '0x5228a22e72ccC52d415EcFd199F99D0665E7733b',
            '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
            '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
        ],
        sCurveRewards_abi: pbtcSCurveRewards_abi,
        sCurveRewards_address: "0xf7977edc1fa61aa9b5f90d70a74a3fbc46e9dad3",
        reward_token: "0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
    },

    bbtc: {
        swap_abi: bbtcSwapABI,
        N_COINS: 2,
        underlying_decimals: [8, 18],
        decimals: [8, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b',
        token_address: '0x410e3E86ef427e30B9235497143881f717d93c2A',
        gauge_address: '0xdFc7AdFa664b08767b735dE28f9E84cd30492aeE',
        infura_url,
        underlying_coins: [
            '0x9be89d2a4cd102d8fecc6bf9da793be995c22541',
            '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
        ],
        coins: [
            '0x9be89d2a4cd102d8fecc6bf9da793be995c22541',
            '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
        ],
        deposit_abi: bbtcDepositABI,
        deposit_address: '0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756',
        is_meta: true,
        meta_N: 5,
        base_pool: 'sbtc',
        meta_decimals: [8, 18, 8, 8, 18],
        meta_coin_decimals: [8, 8, 8, 18],
        meta_wrapped_decimals: [8, 18],
        meta_coins: [
            '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
        ],
        all_coins: [
            '0x9be89d2a4cd102d8fecc6bf9da793be995c22541',
            '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
            '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
        ],
    },

    obtc: {
        swap_abi: obtcSwapABI,
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0xd81dA8D904b52208541Bade1bD6595D8a251F8dd',
        token_address: '0x2fE94ea3d5d4a175184081439753DE15AeF9d614',
        gauge_address: '0x11137B10C210b579405c21A07489e28F3c040AB1',
        infura_url,
        underlying_coins: [
            '0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68',
            '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
        ],
        coins: [
            '0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68',
            '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
        ],
        deposit_abi: obtcDepositABI,
        deposit_address: '0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D',
        is_meta: true,
        meta_N: 5,
        base_pool: 'sbtc',
        meta_decimals: [18, 18, 8, 8, 18],
        meta_coin_decimals: [18, 8, 8, 18],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
        ],
        all_coins: [
            '0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68',
            '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
            '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
            '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
        ],
        sCurveRewards_abi: obtcSCurveRewards_abi,
        sCurveRewards_address: "0x7f1ae7a1fc275b5b9c3ad4497fa94e3b9424e76e",
        reward_token: "0x3c9d6c1C73b31c837832c72E04D3152f051fc1A9",
    },

    seth: {
        swap_abi: sethSwapABI,
        N_COINS: 2,
        has_eth: true,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0xc5424b857f758e906013f3555dad202e4bdb4567',
        token_address: '0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c',
        gauge_address: '0x3C0FFFF15EA30C35d7A85B85c0782D6c94e1d238',
        infura_url,
        underlying_coins: [
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
        ],
        coins: [
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
        ],
    },

    eurs: {
        swap_abi: eursSwapABI,
        N_COINS: 2,
        underlying_decimals: [2, 18],
        decimals: [2, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x0Ce6a5fF5217e38315f87032CF90686C96627CAA',
        token_address: '0x194eBd173F6cDacE046C53eACcE9B953F28411d1',
        gauge_address: '0x90Bb609649E0451E5aD952683D64BD2d1f245840',
        infura_url,
        underlying_coins: [
            '0xdB25f211AB05b1c97D595516F45794528a807ad8',
            '0xD71eCFF9342A5Ced620049e616c5035F1dB98620',
        ],
        coins: [
            '0xdB25f211AB05b1c97D595516F45794528a807ad8',
            '0xD71eCFF9342A5Ced620049e616c5035F1dB98620',
        ],
        sCurveRewards_abi: eursSCurveRewards_abi,
        sCurveRewards_address: "0xc0d8994cd78ee1980885df1a0c5470fc977b5cfe",
        reward_token: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    },

    ust: {
        swap_abi: ustSwapABI,
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x890f4e345B1dAED0367A877a1612f86A1f86985f',
        token_address: '0x94e131324b6054c0D789b190b2dAC504e4361b53',
        gauge_address: '0x3B7020743Bc2A4ca9EaF9D0722d42E20d6935855',
        infura_url,
        underlying_coins: [
            '0xa47c8bf37f92abed4a126bda807a7b7498661acd',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0xa47c8bf37f92abed4a126bda807a7b7498661acd',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        deposit_abi: ustDepositABI,
        deposit_address: '0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [18, 18, 18, 6, 6],
        meta_coin_decimals: [18, 18, 6, 6],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0xa47c8bf37f92abed4a126bda807a7b7498661acd',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
    },

    aave: {
        N_COINS: 3,
        is_aave: true,
        underlying_decimals: [18, 6, 6],
        decimals: [18, 6, 6],
        use_lending: [false, false, false],
        tethered: [false, false, true],
        is_plain: [false, false, false],
        swap_address: '0xDeBF20617708857ebe4F679508E7b7863a8A8EeE',
        token_address: '0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900',
        gauge_address: '0xd662908ADA2Ea1916B3318327A97eB18aD588b5d',
        infura_url,
        underlying_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        coins: [
            '0x028171bCA77440897B824Ca71D1c56caC55b68A3',
            '0xBcca60bB61934080951369a648Fb03DF4F96263C',
            '0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811',
        ],
        swap_abi: aaveSwapABI,
    },

    idle: {
        N_COINS: 3,
        is_idle: true,
        underlying_decimals: [18, 6, 6],
        decimals: [18, 18, 18],
        use_lending: [true, true, true],
        tethered: [false, false, true],
        is_plain: [false, false, false],
        swap_address: '0x83f252f036761a1E3d10DACa8e16D7b21E3744D7',
        token_address: '0x09f4B84A87FC81FC84220fD7287b613B8A9D4c05',
        gauge_address: '0xd69ac8d9D25e99446171B5D0B3E4234dAd294890',
        infura_url,
        underlying_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        coins: [
            '0x3fe7940616e5bc47b0775a0dccf6237893353bb4',
            '0x5274891bEC421B39D23760c04A6755eCB444797C',
            '0xF34842d05A1c888Ca02769A633DF37177415C2f8',
        ],
        swap_abi: idleSwapABI,
    },

    steth: {
        swap_abi: stethSwapABI,
        N_COINS: 2,
        has_eth: true,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0xDC24316b9AE028F1497c275EB9192a3Ea0f67022',
        token_address: '0x06325440D014e39736583c165C2963BA99fAf14E',
        gauge_address: '0x182B723a58739a9c974cFDB385ceaDb237453c28',
        infura_url,
        underlying_coins: [
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
        ],
        coins: [
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
        ],
        sCurveRewards_abi: stethSCurveRewards_abi,
        sCurveRewards_address: "0x99ac10631F69C753DDb595D074422a0922D9056B",
        reward_token: "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
    },

    saave: {
        N_COINS: 2,
        is_aave: true,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        use_lending: [false, false],
        tethered: [false, false],
        is_plain: [false, false],
        swap_address: '0xEB16Ae0052ed37f479f7fe63849198Df1765a733',
        token_address: '0x02d341CcB60fAaf662bC0554d13778015d1b285C',
        gauge_address: '0x462253b8F74B72304c145DB0e4Eebd326B22ca39',
        infura_url,
        underlying_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
        ],
        coins: [
            '0x028171bCA77440897B824Ca71D1c56caC55b68A3',
            '0x6c5024cd4f8a59110119c56f8933403a539555eb',
        ],
        swap_abi: saaveSwapABI,
    },

    ankreth: {
        swap_abi: ankrethSwapABI,
        N_COINS: 2,
        has_eth: true,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0xA96A65c051bF88B4095Ee1f2451C2A9d43F53Ae2',
        token_address: '0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf',
        gauge_address: '0x6d10ed2cf043e6fcf51a0e7b4c2af3fa06695707',
        infura_url,
        underlying_coins: [
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            '0xE95A203B1a91a908F9B9CE46459d101078c2c3cb',
        ],
        coins: [
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            '0xE95A203B1a91a908F9B9CE46459d101078c2c3cb',
        ],
        sCurveRewards_abi: ankrethSCurveRewards_abi,
        sCurveRewards_address: "0x3547DFCa04358540891149559e691B146c6B0043",
        reward_token: "0xe0ad1806fd3e7edf6ff52fdb822432e847411033",
        reward_tokens:["0xe0ad1806fd3e7edf6ff52fdb822432e847411033", "0x8290333cef9e6d528dd5618fb97a76f268f3edd4"],
    },

    usdp: {
        swap_abi: usdpSwapABI,
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x42d7025938bEc20B69cBae5A77421082407f053A',
        token_address: '0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6',
        gauge_address: '0x055be5DDB7A925BfEF3417FC157f53CA77cA7222',
        infura_url,
        underlying_coins: [
            '0x1456688345527bE1f37E9e627DA0837D6f08C925',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0x1456688345527bE1f37E9e627DA0837D6f08C925',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        deposit_abi: usdpDepositABI,
        deposit_address: '0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [18, 18, 18, 6, 6],
        meta_coin_decimals: [18, 18, 6, 6],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0x1456688345527bE1f37E9e627DA0837D6f08C925',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
    },

    ib: {
        swap_abi: ibSwapABI,
        N_COINS: 3,
        underlying_decimals: [18, 6, 6],
        decimals: [8, 8, 8],
        use_lending: [true, true, true],
        is_plain: [false, false, false],
        tethered: [false, false, true],
        is_new_underlying: true,
        swap_address: '0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF',
        token_address: '0x5282a4eF67D9C33135340fB3289cc1711c13638C',
        gauge_address: '0xF5194c3325202F456c95c1Cf0cA36f8475C1949F',
        infura_url,
        underlying_coins: [
            '0x6b175474e89094c44da98b954eedeac495271d0f',
            '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            '0xdac17f958d2ee523a2206206994597c13d831ec7',
        ],
        coins: [
            '0x8e595470ed749b85c6f7669de83eae304c2ec68f',
            '0x76eb2fe28b36b3ee97f3adae0c69606eedb2a37c',
            '0x48759f220ed983db51fa7a8c0d2aab8f3ce4166a',
        ],
    },

    link: {
        swap_abi: linkSwapABI,
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0xF178C0b5Bb7e7aBF4e12A4838C7b7c5bA2C623c0',
        token_address: '0xcee60cfa923170e4f8204ae08b4fa6a3f5656f3a',
        gauge_address: '0xfd4d8a17df4c27c1dd245d153ccf4499e806c87d',
        infura_url,
        underlying_coins: [
            '0x514910771AF9Ca656af840dff83E8264EcF986CA',
            '0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6',
        ],
        coins: [
            '0x514910771AF9Ca656af840dff83E8264EcF986CA',
            '0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6',
        ],
    },
    tusd: {
        swap_abi: tusdSwapABI,
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0xecd5e75afb02efa118af914515d6521aabd189f1',
        token_address: '0xecd5e75afb02efa118af914515d6521aabd189f1',
        gauge_address: '0x359FD5d6417aE3D8D6497d9B2e7A890798262BA4',
        infura_url,
        underlying_coins: [
            '0x0000000000085d4780B73119b644AE5ecd22b376',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0x0000000000085d4780B73119b644AE5ecd22b376',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        deposit_abi: tusdDepositABI,
        deposit_address: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [18, 18, 18, 6, 6],
        meta_coin_decimals: [18, 18, 6, 6],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0x0000000000085d4780B73119b644AE5ecd22b376',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        is_factory: true,
    },
    frax: {
        swap_abi: fraxSwapABI,
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B',
        token_address: '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B',
        gauge_address: '0x72e158d38dbd50a483501c24f792bdaaa3e7d55c',
        infura_url,
        underlying_coins: [
            '0x853d955acef822db058eb8505911ed77f175b99e',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0x853d955acef822db058eb8505911ed77f175b99e',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        deposit_abi: fraxDepositABI,
        deposit_address: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [18, 18, 18, 6, 6],
        meta_coin_decimals: [18, 18, 6, 6],
        meta_wrapped_decimals: [18, 1e18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0x853d955acef822db058eb8505911ed77f175b99e',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        is_factory: true,
    },
    lusd: {
        swap_abi: lusdSwapABI,
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
        token_address: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
        gauge_address: '0x9b8519a9a00100720ccdc8a120fbed319ca47a14',
        infura_url,
        underlying_coins: [
            '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        deposit_abi: lusdDepositABI,
        deposit_address: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [18, 18, 18, 6, 6],
        meta_coin_decimals: [18, 18, 6, 6],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        is_factory: true,
        sCurveRewards_abi: lusdRewardsabi,
        sCurveRewards_address: '0xeb31da939878d1d780fdbcc244531c0fb80a2cf3',
        reward_token: '0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d',
    },
    busdv2: {
        swap_abi: busdv2SwapABI,
        N_COINS: 2,
        underlying_decimals: [18, 18],
        decimals: [18, 18],
        tethered: [false, false],
        use_lending: [false, false],
        is_plain: [true, true],
        swap_address: '0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a',
        token_address: '0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a',
        gauge_address: '0xd4b22fedca85e684919955061fdf353b9d38389b',
        infura_url,
        underlying_coins: [
            '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        coins: [
            '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        ],
        deposit_abi: busdv2DepositABI,
        deposit_address: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
        is_meta: true,
        base_pool: '3pool',
        meta_N: 5,
        meta_decimals: [18, 18, 18, 6, 6],
        meta_coin_decimals: [18, 18, 6, 6],
        meta_wrapped_decimals: [18, 18],
        meta_coins: [
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        all_coins: [
            '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
            '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        ],
        is_factory: true,
    },
};

export {
    infura_url,
    multicall_address,
    poolsData,
};
