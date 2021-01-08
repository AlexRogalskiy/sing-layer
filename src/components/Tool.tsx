import * as React from 'react';
import './Tool.less';

export class Tool extends React.Component<{ direction?: 'left' | 'right' }> {
    render() {
        return <div className={ `tool ${ this.props.direction }` }>
            { this.props.children }
        </div>
    }
}
