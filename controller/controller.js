let board = require('../model/model')

exports.post = (req,res) => {
    const id = board[board.length-1].id
    board.push({id:id,...req.body})
    res.status(201).json(req.body);
}

exports.getAll = (req,res) => {
    res.status(201).json(board);
}

exports.getOne = (req,res) => {
    const id = parseInt(req.params.id)
    res.status(201).json(board.find(i=>i.id === id))
}

exports.delete = (req,res) => {
    const id = parseInt(req.params.id)
    board = board.filter(i=>i.id !== id)
    res.status(201).send("삭제완료");
}