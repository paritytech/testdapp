const React = require('react');
const {Bond} = require('oo7');
const {bonds} = require('oo7-parity');
const {ReactiveComponent, Rspan, SetupBondCache} = require('oo7-react');
const {InputBond, InlineAccount, InlineBalance, AccountIcon} = require('parity-reactive-ui');

class NumberBond extends InputBond {
	constructor () {
		super(['minimum', 'maximum']);
	}
}

NumberBond.defaultProps = {
	placeholder: '123...',
	validator: (v, s) => {
		let m = Number.parseInt(v);
		if (Number.isFinite(m) && m >= s.minimum && m <= s.maximum) {
			return {
				internal: v,
				external: m,
				corrected: '' + m
			};
		}
		return null;
	},
	minimum: 0,
	maximum: 1e99
};

class IfReady extends ReactiveComponent {
	constructor () {
		super(['bond']);
	}
	readyRender () {
		return this.props.children;
	}
	unreadyRender () {
		return this.props.placeholder || null;
	}
}

export class App extends React.Component {
	constructor () {
		super();
		this.input = new Bond;
	}
	render () {
		return (<SetupBondCache><div style={{marginTop: '6em'}}>
			<div>
				You are <InlineAccount address={bonds.me}/> and you have <InlineBalance value={bonds.balance(bonds.me)}/>.
			</div><div>
				Most recent block <Rspan>{bonds.blockNumber}</Rspan> was authored by <InlineAccount address={bonds.head.author}/>.
			</div><div>
				<NumberBond placeholder='Query block number' maximum={bonds.blockNumber} bond={this.input}/>
			</div><IfReady bond={this.input}><div>
				Block <Rspan>{this.input}</Rspan> authored by <InlineAccount address={bonds.blockByNumber(this.input).author}/> at <Rspan>{bonds.blockByNumber(this.input).map(_ => _ ? '' + _.timestamp : 'n/a')}</Rspan>.
			</div></IfReady>
		</div></SetupBondCache>);
	}
}

window.Bond = Bond;
window.bonds = bonds;
/*


				<Rspan>{bonds.badges.map(JSON.stringify)}</Rspan>




*/
