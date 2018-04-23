export function logRender (self) {
    console.log(
        `<${self.__proto__.constructor.name} /> render: \r\n`, self.props
    );
}
