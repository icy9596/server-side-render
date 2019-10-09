import React from 'react';

import styles from './Header.less';

export default class Header extends React.Component {

    render() {
        const { isLogin } = this.props;

        return (
            <div>
                <ul className={ styles['header-wrap'] }>
                    <li className={ styles['head-item'] }>
                        首页
                    </li>
                    {
                        isLogin ?
                            (
                                <div>
                                    <li className={ styles['head-item'] }>
                                        翻译列表   
                                    </li> 
                                    <li className={ styles['head-item'] }>
                                        登出
                                    </li>
                                </div>
                            ) :
                            (
                                <li className={ styles['head-item'] }>
                                    登陆
                                </li>
                            )
                    }
                </ul>           
            </div>
        )
    }

}