const router = require("express").Router()
const validate = require('../middlewares/validateMiddleware')
const {createPerson, getPerson, getAllPerson, updatePerson, deletePerson} = require('../controllers/personController')
const {
    createSchema,
    updateSchema
} = require('../schema/personSchema')

router.post('/', validate(createSchema), createPerson)
router.get('/all', getAllPerson)
router.get('/:name', getPerson)
router.patch('/:name', validate(updateSchema), updatePerson)
router.delete('/:name', deletePerson)

module.exports = router;