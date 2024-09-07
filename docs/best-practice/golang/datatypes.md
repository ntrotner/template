# Data Types

## Stucts
Use custom tags to handle special cases for data

```golang
type DATA_PRIVACY_TYPES string
const (
  DATA_PRIVACY = "data_privacy"
  DATA_PRIVACY_GDPR DATA_PRIVACY_TYPES = "gdpr"
  DATA_PRIVACY_CCPA DATA_PRIVACY_TYPES = "ccpa"
)

type User stuct {
  FirstName string `data_privacy:"gdpr"`
  LastName  string `data_privacy:"gdpr,ccpa"`
}

func complyDataPrivacy(data interface{}) {
  val := reflect.ValueOf(data)
  for i := 0; i < val.NumField(); i++ {
      tag := val.Type().Field(i).Tag.Get("data_privacy")
      // ...
  }
}
```

## Data type creation

### Avoid pointers when...

#### No Modification on Receiver 

Generally if no action needs to be performed on that data type
```go
type Buffer []byte
func (b Buffer) Len() int { return len(b) }
```

vs.

```go
type Counter int
func (c *Counter) Inc() { *c++ }

type Queue []Item
func (q *Queue) Push(x Item) { *q = append([]Item{x}, *q...) }
```

#### No Mutex needed

```go
type Counter struct {
    mu    sync.Mutex
    total int
}

func (c *Counter) Inc() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.total++
}
```

#### Receiver is a small-medium struct
Should be benchmarked anyways before switching to pass pointer by value

#### Concurrent functions that don't access the data
Depends on:
- Modification of data visible to other functions
- Mutex

#### Struct or array don't "allow" to modify data
```go
type Counter struct {
    m *Metric
}

func (c *Counter) Inc() {
    c.m.Add(1)
}
```

#### Is a built-in type without the need to be modified
Same for map, function and channel
```go
type User string

func (u User) String() { return string(u) }
```

#### Inside handler functions for HTTP Requests
Garbage collector should be able to effectively remove everything related to that HTTP request context.
