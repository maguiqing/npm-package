import React, { Component } from 'react';
import './css/main.css';
import PropTypes from 'prop-types';

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

    handleClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        const { local, props } = this;
        console.log(1123);
        // const header = c('collapse-header');
        // const content = c('collapse-content', this.state.collapse && 'collapse-true');
        // const img = c('collapse-img', this.state.collapse && 'rotate-img');

        // return <div>111</div>
        return (
            <div className="collapse-wrapper">
                <div className="collapse-header">
                    {props.header}
                    <img src="./image/collapse.svg" />
                </div>
                <div className="collapse-content">{props.content}</div>
            </div>
        );
        // h.div('collapse-wrapper', {},
        //     h.div(header, {
        //             onClick: () => this.handleClick()
        //         },
        //         props.header,
        //         h.img(img, {src: require('./image/collapse.svg')})
        //     ),
        //     h.div(content, {}, props.content),
        // );
    }
}