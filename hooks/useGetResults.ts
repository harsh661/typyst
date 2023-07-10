const useGetResults = ({testTime, input}:any) => {
    const wordsTyped = input.length/5
    const timeInMinutes = testTime/60

    const speed = wordsTyped/timeInMinutes

    return Math.round(speed)
}

export default useGetResults