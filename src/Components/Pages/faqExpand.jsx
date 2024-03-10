import {React, useState} from 'react';
import {FaPlus, FaTimes} from 'react-icons/fa';

export const FaqExpand = ({defaultText, expandedText}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () =>{
        setIsExpanded(!isExpanded);
    };

    return(
                    
        
        <div className="faq-buttons">
            <div className="faq-button">
                <button onClick={toggleExpanded}>
                    <p>{defaultText}</p>

                    <i className='i'>
                        {isExpanded ? <FaTimes/> : <FaPlus/> }
                        {/* {isExpanded ? expandedText : defaultText} */}
                    </i>
                </button>
                {isExpanded && (
                    <div className="btn-text">
                        {expandedText}
                    </div>
                )}

            </div>
        </div>


    );
};