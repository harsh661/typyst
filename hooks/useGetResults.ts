const useGetResults = ({testTime, input, errors}:any) => {
    const wordsTyped = input.length/5
    const timeInMinutes = testTime/60

    const accuracy = Math.round((input.length - errors)/input.length * 100)

    const speed = Math.round(wordsTyped/timeInMinutes)

    const cpm = Math.round(input.length/timeInMinutes)

    return {
        speed, accuracy, cpm
    }
}

export default useGetResults
