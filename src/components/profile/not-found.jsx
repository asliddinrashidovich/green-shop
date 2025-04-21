import PropTypes from "prop-types"

NotFound.propTypes  = {
    children: PropTypes.node.isRequired
}

function NotFound({children}) {
  return (
    <div className="flex justify-center mt-[50px]">
        <div className="flex flex-col items-center">
            <img src="/public/flowers/no_data.svg" alt="not found" />
            <h2 className="mt-[20px] text-[17px] font-[600]">{children}</h2>
        </div>
    </div>
  )
}

export default NotFound