import classNames from 'classnames';
import React,{PropTypes} from 'react';

/*
function Button(props){
    const cssclasses = classNames('Button',props.className);
    return props.href 
        ?  <a {...props} className={cssclasses}/>
        : <buton {...props} className={cssclasses}/>
}
*/
const Button = props =>
    props.href 
        ?  <a {...props} className={classNames('Button',props.className)}/>
        :  <button {...props} className={classNames('Button',props.className)}/>

Button.propTypes = {
    href: PropTypes.string,
}

export default Button