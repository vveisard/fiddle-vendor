import cowsay from "cowsay";
import reverseString from "reverse-string";
import {
  log
} from './helpers.ts'

import { createStore} from 'zustand/vanilla'

log(cowsay.say({ text: reverseString(`Moo!`) }));
