import {TimeRange} from 'src/types/query'
interface TimeRangeOption extends TimeRange {
  defaultGroupBy: string
  seconds: number
  inputValue: string
  menuOption: string
}

export const timeRanges: TimeRangeOption[] = [
  {
    defaultGroupBy: '100ms',
    seconds: 15,
    inputValue: 'Past 15s',
    lower: 'now() - 15s',
    upper: null,
    menuOption: 'Past 15s',
  },
  {
    defaultGroupBy: '1s',
    seconds: 60,
    inputValue: 'Past 1m',
    lower: 'now() - 1m',
    upper: null,
    menuOption: 'Past 1m',
  },
  {
    defaultGroupBy: '10s',
    seconds: 300,
    inputValue: 'Past 5m',
    lower: 'now() - 5m',
    upper: null,
    menuOption: 'Past 5m',
  },
  {
    defaultGroupBy: '1m',
    seconds: 900,
    inputValue: 'Past 15m',
    lower: 'now() - 15m',
    upper: null,
    menuOption: 'Past 15m',
  },
  {
    defaultGroupBy: '1m',
    seconds: 3600,
    inputValue: 'Past 1h',
    lower: 'now() - 1h',
    upper: null,
    menuOption: 'Past 1h',
  },
  {
    defaultGroupBy: '1m',
    seconds: 21600,
    inputValue: 'Past 6h',
    lower: 'now() - 6h',
    upper: null,
    menuOption: 'Past 6h',
  },
  {
    defaultGroupBy: '5m',
    seconds: 43200,
    inputValue: 'Past 12h',
    lower: 'now() - 12h',
    upper: null,
    menuOption: 'Past 12h',
  },
  {
    defaultGroupBy: '10m',
    seconds: 86400,
    inputValue: 'Past 24h',
    lower: 'now() - 24h',
    upper: null,
    menuOption: 'Past 24h',
  },
  {
    defaultGroupBy: '30m',
    seconds: 172800,
    inputValue: 'Past 2d',
    lower: 'now() - 2d',
    upper: null,
    menuOption: 'Past 2d',
  },
  {
    defaultGroupBy: '1h',
    seconds: 604800,
    inputValue: 'Past 7d',
    lower: 'now() - 7d',
    upper: null,
    menuOption: 'Past 7d',
  },
  {
    defaultGroupBy: '6h',
    seconds: 2592000,
    inputValue: 'Past 30d',
    lower: 'now() - 30d',
    upper: null,
    menuOption: 'Past 30d',
  },
]

export const FORMAT_INFLUXQL = 'influxql'

export const defaultTimeRange = {
  upper: null,
  lower: 'now() - 15m',
  seconds: 900,
  format: FORMAT_INFLUXQL,
}
