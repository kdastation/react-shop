import './circle-with-a-plus.css'


const CircleWithAPlus = (props) => {

    const {addOnePieceProductOnClick} = props

    return (
        <div onClick={addOnePieceProductOnClick} className="circle-with-a-plus">
            <div className="plus-stick-one"></div>
            <div className="plus-stick-two"></div>
        </div>
    )
}

export default CircleWithAPlus