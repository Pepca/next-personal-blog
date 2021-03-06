import type {NextApiRequest, NextApiResponse} from 'next'
import type {
  FormInputProps,
  ResponseMessageProps,
  StrongPasswordOptions,
} from './types'

export interface SetStaticClasses {
  (classes: string[]): string
}

export interface SetDynamicClasses {
  (args: {
    staticClasses: string[]
    dynamicClasses: string[][]
    conditions: boolean[]
  }): string
}

export interface SidebarContextStorage {
  isSidebarActive: boolean
  toggleSidebarState: () => void
}


export interface IsStrongPassword {
  (password: string, options: StrongPasswordOptions): boolean
}

export interface Endpoint<ResponseData> {
  (req: NextApiRequest, res: NextApiResponse<ResponseData>): Promise<void>
}

export interface GenericRequestFn {
  <ResponseData>(url: string, options?: RequestInit): Promise<ResponseData>
}

export interface AuthValues {
  email: string
  password: string
}

export interface FormInputComponent {
  (props: FormInputProps): JSX.Element
}

export interface ResponseMessageComponent {
  (props: ResponseMessageProps): JSX.Element
}

export interface StoriesList {
  id: number
  image: StaticImageData
  title: string
  date: string
}

export interface PostsList {
  id: number
  image?: StaticImageData
  title?: string
  text: string
  date: string
  tag?: string
}

export interface WorksList {
  id: number
  image: StaticImageData
  title: string
  text: string
  tags: string[]
  href: string
}
