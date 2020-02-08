const messageModel = require('../Models/Message');

//fetch all messages
const all = async (req, res) => {
    try {
        const results = await messageModel.find();
        await res.json({
            status: 'succes',
            results: results
        })
    } catch (error) {
        console.error(error)
    }
};
//fetch message by id
const get = async (req, res) => {
    try {
        const result = await messageModel.findById({_id: req.params.id});
        await res.json({
            status: 'succes',
            result: result
        })
    } catch (error) {
        console.error(error)
    }
};
//create a new message
const post = async (req, res) => {
    let message = new messageModel({
        user: req.body.user,
        content: req.body.content,
    });
    try {
        const result = await message.save();
        await res.json({
            status: 'succes',
            result: result
        })
    } catch (error) {
        console.error(error)
    }

};

//update message by id
const put = async (req, res) => {
    try {
        const result = await messageModel.updateOne({_id: req.params.id}, {
            $set: {
                content: req.body.content,
            }
        });
        await res.json({
            status: 'succes',
            result: result
        })
    } catch (error) {
        console.error(error)
    }

};
//delete message by id
const remove = async (req, res) => {
    try {
        const result = await messageModel.deleteOne({_id: req.params.id});
        await res.json({
            status: 'succes',
            result: result
        })
    } catch (error) {
        console.error(error)
    }

};
//export all controller action
module.exports = {
    all,
    get,
    post,
    put,
    remove
};
