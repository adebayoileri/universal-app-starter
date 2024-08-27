import {create} from 'twrnc'

// create the customized version...
export const tw = create(require('../tailwind.config')) // <- your path may differ
export const twColor = tw.color
export const tailwind = tw.style
