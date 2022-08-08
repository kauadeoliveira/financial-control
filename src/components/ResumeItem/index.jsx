import * as C from "./styles"

export const ResumeItem = ({ title, Icon, value }) => {
    return(
        <C.Container>
            <C.Header>
                <C.HeaderTitle>
                    {title}
                </C.HeaderTitle>
                <Icon /> {/* Icon é um componente que foi passado. */}
            </C.Header>
            <C.Total>
                {value}
            </C.Total>
        </C.Container>
    )
}