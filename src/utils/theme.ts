import {DefaultTheme} from 'styled-components'

export interface Theme extends DefaultTheme {
    colors: {
        pokemonType: {
            Psychic: '#f8a5c2',
            Fighting: '#f0932b',
            Fairy: '#c44569',
            Normal: '#f6e58d',
            Grass: '#badc58',
            Metal: '#95afc0',
            Water: '#3dc1d3',
            Lightning: '#f9ca24',
            Darkness: '#574b90',
            Colorless: '#FFF',
            Fire: '#eb4d4b',
        }
        component: {
            cardBoxShadow: '#d5d6dc',
            cardBoxShadowHover: '#aeaeae',
            cardBackground: '#f3f4f7',
            colorAddButton: '#dc7777',
            levelTubeBackground: '#e4e4e4',
            levelTubeBoxShadow: '#d4d4d4',
            levelTubeValueBackground: '#f3701a',
            bottomBarBackground: '#ec5656',
            bottomBarBoxShadow: '#d9333387',
            bottomBarTextColor: '#ffffff',
            modalOutside: '#000000a3',
            modalContentBoxShadow: '#474444',
            modalContentBackground: '#ffffff',
            searchBoxBorder: '#e6e6e6',
        }
    }
}

const theme: Theme = {
    colors: {
        pokemonType: {
            Psychic: '#f8a5c2',
            Fighting: '#f0932b',
            Fairy: '#c44569',
            Normal: '#f6e58d',
            Grass: '#badc58',
            Metal: '#95afc0',
            Water: '#3dc1d3',
            Lightning: '#f9ca24',
            Darkness: '#574b90',
            Colorless: '#FFF',
            Fire: '#eb4d4b',
        },
        component: {
            cardBoxShadow: '#d5d6dc',
            cardBoxShadowHover: '#aeaeae',
            cardBackground: '#f3f4f7',
            colorAddButton: '#dc7777',
            levelTubeBackground: '#e4e4e4',
            levelTubeBoxShadow: '#d4d4d4',
            levelTubeValueBackground: '#f3701a',
            bottomBarBackground: '#ec5656',
            bottomBarBoxShadow: '#d9333387',
            bottomBarTextColor: '#ffffff',
            modalOutside: '#000000a3',
            modalContentBoxShadow: '#474444',
            modalContentBackground: '#ffffff',
            searchBoxBorder: '#e6e6e6',
        },
    },
}

export {theme}
