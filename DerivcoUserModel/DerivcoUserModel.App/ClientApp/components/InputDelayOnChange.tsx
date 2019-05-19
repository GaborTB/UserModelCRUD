import * as React from 'react'

const Delay = 1500 // milliseconds

interface IInputDelayOnChangeProps extends React.ChangeTargetHTMLProps<HTMLInputElement>{
    //className: string
    //disabled: boolean
    onDelayedChange?: (event: React.FormEvent<HTMLInputElement>) => void
    //type: string
    // leaving this intact because otherwise we'd have to cast it and it's too much of an overhead
    value: string
}

interface IInputDelayOnChangeState {
    value: string
}

class InputDelayOnChange extends React.Component<IInputDelayOnChangeProps, IInputDelayOnChangeState> {

    timeout: number = 0;
    cachedOnChange?: (event: React.FormEvent<HTMLInputElement>) => void

    constructor(props: IInputDelayOnChangeProps) {
        super(props)
        this.cachedOnChange = props.onDelayedChange
        this.state = { value: props.value }

        this.onChange = this.onChange.bind(this)
    }

    componentWillReceiveProps(nextProps: IInputDelayOnChangeProps) {
        this.setState({
            value: nextProps.value
        })
    }

    onChange(event: React.FormEvent<HTMLInputElement>) {
        if (this.props.onChange) {
            this.props.onChange(event as any)
        }
        event.persist()

        clearTimeout(this.timeout)

        this.timeout = setTimeout(() => {
            if (this.cachedOnChange) {
                this.cachedOnChange(event)
            }
        }, Delay)

        this.setState({ value: (event.target as HTMLInputElement).value })
    }

    render() {
        let props = { ...this.props }
        delete props.onDelayedChange;
        return (
            <input
                { ...props }
                onChange={this.onChange}
                value={this.state.value}
            />
        )
    }
}

export default InputDelayOnChange