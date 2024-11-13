import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const Cn = (...args) => {
    return twMerge(clsx(...args))
}
export default Cn;