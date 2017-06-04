import Rating from './Rating';
import React,{Component,PropTypes} from 'react';
import Suggest from './Suggest';

class FormInput extends Component{
    // 在这里，this.refs.input是底层DOM元素的一个引用。对于原生DOM元素，比如<input>和<textarea>，通过this.refs.input.value获取value属性值（就像原生的DOM操作方法document.getElementById('some-input').value那样）.对于自定义组件，比如<Suggest>和<Rating>，则调用它们本身的getValue()方法
    getValue(){
        return 'value' in this.refs.input
                ? this.refs.input.value
                : this.refs.input.getValue();
    }
    render(){
        const common = {    //通用属性
            id: this.props.id,
            ref: 'input',
            defaultValue: this.props.defaultValue,    
        }
        switch(this.props.type){
            case 'year':
                return (
                   <input
                        {...common}
                        type="number"
                        defaultValue={this.props.defaultValue || new Date().getFullYear()}
                        />
                );
            case 'suggest':
                return <Suggest {...common} options={this.props.options}/>
            case 'rating':
                return (
                    <Rating
                        {...common}
                        defaultValue={parseInt(this.props.defaultValue,10)}
                        />
                )
            case 'text':
                return <textarea {...common}/>;
            default:
                return <input {...common} type="text"/>
        }
    }
}

FormInput.propTypes = {
    type: PropTypes.oneOf(['year','suggest','rating','text','input']),
    id: PropTypes.string,
    options: PropTypes.array, //用于<option>选项列表的自动补全功能
    defaultValue: PropTypes.any,
}

export default FormInput