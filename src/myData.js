const message = 'hello other file';

const getMessage = () => {
    console.log(message);
    return message;
}

//moudle.exports.getMessage = getMessage(); ALSO WORKS

module.exports = {
    getMessage,
}