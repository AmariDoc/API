const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getNBA);
router.get('/:id', controller.getNBAById);
router.post('/', controller.addBasketball);
router.put('/', controller.updateNBA);

module.exports = router;
