#!/usr/bin/env node
const chalk = require('chalk')
const sym = require('log-symbols')
const green = chalk.green
const greenI = green.inverse
const red = chalk.red
const redI = red.inverse
const redB = red.bold
const orange = chalk.keyword('orange')
const orangeI = orange.inverse
const blue = chalk.blue
const blueI = blue.inverse

const alert = options => {
	const defaultOptions = {
		type: 'error',
		msg: `You forgot to define all options.`
	}
	const opts = {
		...defaultOptions,
		...options
	}
	const { type, msg, name } = opts
	const printName = name ? ` ${name} `.toUpperCase() : ` ${type} `.toUpperCase()
	switch (type) {
		case 'success':
			console.log(`\n${sym.success} ${greenI(printName)} ${green(msg)}\n`)
			break
		case 'error':
			console.log(`\n${sym.error} ${redI(printName)} ${redB(msg)}\n`)
			break
		case 'warning':
			console.log(`\n${sym.warning} ${orangeI(printName)} ${orange(msg)}\n`)
			break
		case 'info':
			console.log(`\n${sym.info} ${blueI(printName)} ${blue(msg)}\n`)
			break
		default:
			break
	}
}
alert({
	type: 'success',
	msg: "You have successfuly finished the task!",
})
alert({
	type: 'info',
	msg: "You have successfuly finished the task!",
})
alert({
	type: 'warning',
	msg: "You have finished the the task with warnings",
})
alert({
	type: 'error',
	msg: "You have failed.",
})