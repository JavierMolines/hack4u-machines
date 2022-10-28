import { ILink } from "./types"
import { CustomLink } from "./styles"

const Link: React.FC<ILink> = ({ target, children, color }) => {
  return (
    <CustomLink
      href={target}
      target="_blank"
      rel="noreferrer"
      style={{ color }}
    >
      {children}
    </CustomLink>
  )
}

export { Link }
