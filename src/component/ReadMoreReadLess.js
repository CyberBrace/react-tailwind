import { useState } from "react";

const ReadMoreReadLess = ({ limit, children }) => {

    const text = children;

    const [isReadMoreShown, setReadMoreShown] = useState(false)

    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
    }

    return (
        <div className="read-more-read-less">
            <br /><br />
            {isReadMoreShown ? text : text.substr(0, limit)}
            <div className="text-left mt-5">
                <button className="btn-rounded  bg-finegreen text-white " onClick={toggleBtn}>
                    {isReadMoreShown ? 'Read Less' : 'Read More'}</button>
            </div>
        </div>
    )
}
export default ReadMoreReadLess
