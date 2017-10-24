import React from 'react';
import {bonds} from 'oo7-parity';
import {Rspan} from 'oo7-react';
import {InlineAccount} from 'parity-reactive-ui';

export class App extends React.Component {
	render() {
		return (<div>
			Hello world! Block number is <Rspan>{bonds.blockNumber}</Rspan>.
		</div>);
	}
}

window.bonds = bonds;
