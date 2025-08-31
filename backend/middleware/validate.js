// Validation middleware

// Validate body of request
export const validateTask = (req, res, next) => {
    const {title, description, priority} = req.body;

    if (!title || !description) {
        return res.status(400).json({error: 'Title and description are required'});
      }
    
    if (priority && priority !== 'low' && priority !== 'medium' && priority !== 'high') {
        return res.status(400).json({error: 'Priority must be low, medium, or high'});
    }

    next();
}

// validate id task
export const validateTaskId = (req, res, next) => {
    const {id} = req.params;

    if (!id || isNaN(parseInt(id))) {
        return res.status(400).json({ error: 'Valid task ID is required' });
    }

    next();
    
}