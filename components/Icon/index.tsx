import { IIcon } from "./types"
import { IconImage } from "./styles"

const Icon: React.FC<IIcon> = ({ src, dimension, click = () => {} }) => {
  return (
    <IconImage
      onClick={click}
      src={src}
      alt={src}
      width={dimension}
      height={dimension}
    />
  )
}

export { Icon }
