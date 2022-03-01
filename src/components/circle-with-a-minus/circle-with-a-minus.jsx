import './circle-with-a-minus.css'

const CircleWithAMinus = (props) => {

    const {removeOnePieceOfProductOnClick} = props


    return (
        <div onClick={removeOnePieceOfProductOnClick} className="circle-with-a-minus">
            <div className="minus-stick"></div>
        </div>
    )
}

export default CircleWithAMinus