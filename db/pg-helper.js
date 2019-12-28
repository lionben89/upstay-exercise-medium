export const createChainVarString = len => {
	let chainVarString = '';
	for (let i = 1; i < len; i++) {
		chainVarString = chainVarString.concat(`$${i},`);
	}
	chainVarString = chainVarString.concat(`$${len}`);
	return chainVarString;
};
