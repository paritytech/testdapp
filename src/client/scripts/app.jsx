const React = require('react');
const {Bond} = require('oo7');
const {Bonds, bonds, options, ParityApi} = require('oo7-parity');
const {ReactiveComponent, Resolve, IfReady, SetupBondCache} = require('oo7-react');
const {InputBond, NumberBond, InlineAccount, InlineBalance, AccountIcon} = require('parity-reactive-ui');

export class App extends React.Component {
	constructor () {
		super();
		this.input = new Bond;
		window.app = this;
	}
	render () {
		return (<SetupBondCache><div style={{marginTop: '6em'}}>
			<div>
				You are <InlineAccount address={bonds.me}/> and you have <InlineBalance value={bonds.balance(bonds.me)}/>.
			</div><div>
				Most recent block <Resolve content={bonds.blockNumber} as='span'/> was authored by <InlineAccount address={bonds.head.author}/>.
			</div><div>
				<NumberBond placeholder='Query block number' maximum={bonds.blockNumber} bond={this.input}/>
			</div><IfReady bond={this.input}><div>
				Block <Resolve content={this.input} as='span'/> authored by <InlineAccount address={bonds.blockByNumber(this.input).author}/> at <Resolve content={bonds.blockByNumber(this.input).map(_ => _ ? '' + _.timestamp : 'n/a')} as='span'/>.
			</div></IfReady>
		</div></SetupBondCache>);
	}
}

// for debugging
window.Bond = Bond;
window.bonds = bonds;
window.options = options;
window.Bonds = Bonds;
window.ParityApi = ParityApi;
