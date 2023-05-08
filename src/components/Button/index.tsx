import { FC } from "react"
import { Button as CButton, ButtonProps } from "@chakra-ui/react"

interface IButton extends ButtonProps {
  theme: string
}

const Button: FC<IButton> = (props) => {
  const { theme, children } = props

  return (
    <CButton 
      {...props}
    >
      {children}
    </CButton>
  )
}