import React, { Component } from 'react';
import './css/main.less';
import PropTypes from 'prop-types';
import c from 'classnames';

export default class CollapseView extends Component {
    static propTypes = {
        head: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        content: PropTypes.node
    };
    static defaultProps = {
        header: '头部',
        content: '内容'
    };

    state = {
        collapse: false
    };

    // 注入全局的 app 对象, 通过 props.app 可访问
    // static shouldInjectApp = true;

    handleClick(e) {
        // e.preventDefault();
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        const { local, props } = this;
        const { className } = props;
        const header = c('collapse-header');
        const content = c('collapse-content', this.state.collapse && 'collapse-true');
        const img = c('collapse-img', this.state.collapse && 'rotate-img');

        return (
            <div className={c('collapse-wrapper', className)}>
                <div className={header} onClick={this.handleClick.bind(this)}>
                    {props.header}
                    <img className={img} src={require('./image/collapse.svg')} />
                </div>
                <div className={content}>{props.content}</div>
            </div>
        );
    }

    componentDidMount() {
        // var a = {a: 1};
        // function fun1 (a) {
        //     return a
        // }
        // function fun2 (a) {
        //     var a = {a: 1}
        //     return a
        // }
        // let c = e = fun1(a);
        // let d = f = fun2();
        // console.log(a === c);
    }
}
