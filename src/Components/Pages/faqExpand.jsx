import {React} from 'react';
import {FaPlus, FaTimes} from 'react-icons/fa';

export const FaqExpand = ({defaultText, expandedText, isOpen, onClick}) => {
    // const [isExpanded, setIsExpanded] = useState(false);
    // const toggleExpanded = () =>{
    //     setIsExpanded(!isExpanded);
    // };

    return(
                    
        
        <div className="faq-buttons">
            <div className="faq-button">
                <button onClick={onClick}>
                    <p>{defaultText}</p>

                    <i className='i'>
                        {isOpen ? <FaTimes/> : <FaPlus/> }
                        {/* {isExpanded ? expandedText : defaultText} */}
                    </i>
                </button>
                {isOpen && (
                    <div className="btn-text">
                        {expandedText}
                    </div>
                )}

            </div>
        </div>


    );
};