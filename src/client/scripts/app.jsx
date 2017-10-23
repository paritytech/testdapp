import React from 'react';
import {bonds} from 'oo7-parity';
import {Rspan} from 'oo7-react';

export class App extends React.Component {
	render() {
		return (<div>
			Hello world!
			<Rspan>{bonds.blockNumber}</Rspan>
		</div>);
	}
}
