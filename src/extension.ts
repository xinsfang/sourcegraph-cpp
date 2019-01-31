import { activateOnFileExts } from '@sourcegraph/basic-code-intel'

export const activate = activateOnFileExts(['c', 'cc', 'cpp', 'c++', 'h++', 'hh', 'h'])
