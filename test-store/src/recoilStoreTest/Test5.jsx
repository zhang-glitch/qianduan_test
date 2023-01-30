import {
  atom,
  selector,
  useRecoilState,
  DefaultValue,
  useResetRecoilState
} from 'recoil'

const tempFahrenheit = atom({
  key: 'tempFahrenheit',
  default: 32
})

const tempCelsius = selector({
  key: 'tempCelsius',
  get: ({ get }) => ((get(tempFahrenheit) - 32) * 5) / 9,
  set: ({ set }, newValue) => {
    set(
      tempFahrenheit,
      newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32
    )
  }
})

export default function Test5() {
  const [tempF, setTempF] = useRecoilState(tempFahrenheit)
  const [tempC, setTempC] = useRecoilState(tempCelsius)
  const resetTemp = useResetRecoilState(tempCelsius) // 只有useResetRecoilState返回的修改函数，才会表示重置

  const addTenCelsius = () => setTempC(tempC + 10)
  const addTenFahrenheit = () => setTempF(tempF + 10)
  // 当未传递新值时，他表示重置。
  const reset = () => resetTemp()

  return (
    <div>
      Temp (Celsius): {tempC}
      <br />
      Temp (Fahrenheit): {tempF}
      <br />
      <button onClick={addTenCelsius}>通过selector修改state</button>
      <br />
      <button onClick={addTenFahrenheit}>修改原始数据</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  )
}
