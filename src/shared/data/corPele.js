const corPeles = ['Branca', 'Preta', 'Parda', 'Amarela']

const corPeleOptions = corPeles.map((corPele) => ({
    label: corPele,
    value: corPele.toLowerCase(),
}))

export { corPeleOptions }

export default corPeles