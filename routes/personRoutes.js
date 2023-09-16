const router = require("express").Router()
const validate = require('../middlewares/validateMiddleware')
const {createPerson, getPerson, updatePerson, deletePerson,  getAllPerson} = require('../controllers/personController')
const {
    createSchema,
    updateSchema
} = require('../schema/personSchema')

router.get('/all', getAllPerson)
router.get('/:name', getPerson)
router.patch('/:name', validate(updateSchema), updatePerson)
router.delete('/:name', deletePerson)
router.post('/', validate(createSchema), createPerson)

module.exports = router;