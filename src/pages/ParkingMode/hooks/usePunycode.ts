import { useMemo } from 'react'
import { toASCII } from 'punycode'

export const usePunycode = (name: string) => useMemo(() => toASCII(name), [name])
