# Code Style

## Error Handling

### Inline error handling

```go
if err := ...; err != nil {
  // handle error
}
```

## Logging

### Structured
```go
  log.Fatal().Str("id", ...).Msg("...") // exit 1
  log.Debug().Str("id", ...).Msg("...") // only for dev purpose
  log.Error().Str("id", ...).Msg("...")
  log.Info().Str("id", ...).Msg("...")
```

## Context

 