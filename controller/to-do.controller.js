const Content = require('../model/content');

exports.getAllContent = async (req, res) => {
    const result = await Content.find({ status: '1' });
    return res.status(200).json({ response: result, message: 'content fetched successfully' });
}

exports.createContent = async (req, res) => {
    try {
        const { content } = req.body;
        const result = await Content.create({
            content: req.body.content
        })
        return res.status(200).json({ response: result, message: 'content created successfully' });
    } catch (error) {
        console.log('error', error)

        return res.status(400).json({ response: null, message: 'Failed to create content' });
    }

}

exports.updateContent = async (req, res) => {
    try {
        const { contentId } = req.params;
        const { content } = req.body;
        const result = await Content.findByIdAndUpdate({ _id: contentId }, { content }, { new: true });
        return res.status(200).json({ response: result, message: 'content updated successfully' });
    }
    catch (error) {
        console.log("error", error)
        return res.status(400).json({ response: null, message: 'Failed to update content' });
    }
}

exports.deleteContent = async (req, res) => {
    try {
        const { contentId } = req.params;
        const result = await Content.findByIdAndUpdate({ _id: contentId }, { status: '0' });
        return res.status(200).json({ response: result, message: 'content deleted successfully' });
    } catch (error) {
        console.log("error", error)
        return res.status(400).json({ response: null, message: 'Failed to delete content' });

    }

}



