# Progress List: design tokens

> **Status:** Alle namen zijn een voorstel en nog niet bevestigd.

## Sjabloon `tokens.json` voor je thema

```json
{
  "denhaag": {
    "progress-list": {
      "body": {
        "border-radius": {
          "value": ""
        },
        "error": {
          "background-color": {
            "value": ""
          }
        },
        "gap": {
          "value": ""
        },
        "padding": {
          "value": ""
        },
        "warning": {
          "background-color": {
            "value": ""
          }
        }
      },
      "chevron": {
        "color": {
          "value": ""
        },
        "expanded-transform": {
          "value": ""
        },
        "size": {
          "value": ""
        },
        "transform": {
          "value": ""
        }
      },
      "connector": {
        "color": {
          "value": ""
        },
        "positive-color": {
          "value": ""
        }
      },
      "content": {
        "gap": {
          "value": ""
        }
      },
      "date": {
        "color": {
          "value": ""
        },
        "font-size": {
          "value": ""
        },
        "gap": {
          "value": ""
        }
      },
      "dot": {
        "border-radius": {
          "value": ""
        },
        "border-width": {
          "value": ""
        },
        "checked": {
          "background-color": {
            "value": ""
          },
          "border-color": {
            "value": ""
          },
          "icon-color": {
            "value": ""
          }
        },
        "current": {
          "background-color": {
            "value": ""
          },
          "border-color": {
            "value": ""
          },
          "icon-color": {
            "value": ""
          }
        },
        "error": {
          "background-color": {
            "value": ""
          },
          "border-color": {
            "value": ""
          },
          "icon-color": {
            "value": ""
          }
        },
        "font-weight": {
          "value": ""
        },
        "icon-size": {
          "value": ""
        },
        "padding-block-end": {
          "value": ""
        },
        "padding-block-start": {
          "value": ""
        },
        "padding-inline-end": {
          "value": ""
        },
        "padding-inline-start": {
          "value": ""
        },
        "pending": {
          "background-color": {
            "value": ""
          },
          "border-color": {
            "value": ""
          },
          "color": {
            "value": ""
          }
        },
        "sub": {
          "danger-color": {
            "value": ""
          },
          "neutral-color": {
            "value": ""
          },
          "positive-color": {
            "value": ""
          },
          "size": {
            "value": ""
          },
          "warning-color": {
            "value": ""
          }
        },
        "warning": {
          "background-color": {
            "value": ""
          },
          "border-color": {
            "value": ""
          },
          "icon-color": {
            "value": ""
          }
        }
      },
      "icon-size": {
        "value": ""
      },
      "label": {
        "font-weight": {
          "value": ""
        }
      },
      "marker": {
        "background-color": {
          "value": ""
        },
        "gap": {
          "value": ""
        }
      },
      "max-width": {
        "value": ""
      },
      "step-gap": {
        "value": ""
      },
      "substep-gap": {
        "value": ""
      },
      "substeps-gap": {
        "value": ""
      }
    }
  }
}
```

## Sjabloon CSS-variabelen voor je thema

```css
.your-theme {
  --denhaag-progress-list-body-border-radius: <length-percentage>;
  --denhaag-progress-list-body-error-background-color: <color>;
  --denhaag-progress-list-body-gap: <length>;
  --denhaag-progress-list-body-padding: <length>;
  --denhaag-progress-list-body-warning-background-color: <color>;

  --denhaag-progress-list-chevron-color: <color>;
  --denhaag-progress-list-chevron-expanded-transform: <transform-function>;
  --denhaag-progress-list-chevron-size: <length>;
  --denhaag-progress-list-chevron-transform: <transform-function>;

  --denhaag-progress-list-connector-color: <color>;
  --denhaag-progress-list-connector-positive-color: <color>;

  --denhaag-progress-list-content-gap: <length>;

  --denhaag-progress-list-date-color: <color>;
  --denhaag-progress-list-date-font-size: <length>;
  --denhaag-progress-list-date-gap: <length>;

  --denhaag-progress-list-dot-border-radius: <length-percentage>;
  --denhaag-progress-list-dot-border-width: <length>;
  --denhaag-progress-list-dot-checked-background-color: <color>;
  --denhaag-progress-list-dot-checked-border-color: <color>;
  --denhaag-progress-list-dot-checked-icon-color: <color>;
  --denhaag-progress-list-dot-current-background-color: <color>;
  --denhaag-progress-list-dot-current-border-color: <color>;
  --denhaag-progress-list-dot-current-icon-color: <color>;
  --denhaag-progress-list-dot-error-background-color: <color>;
  --denhaag-progress-list-dot-error-border-color: <color>;
  --denhaag-progress-list-dot-error-icon-color: <color>;
  --denhaag-progress-list-dot-font-weight: <number>;
  --denhaag-progress-list-dot-icon-size: <length>;
  --denhaag-progress-list-dot-padding-block-end: <length>;
  --denhaag-progress-list-dot-padding-block-start: <length>;
  --denhaag-progress-list-dot-padding-inline-end: <length>;
  --denhaag-progress-list-dot-padding-inline-start: <length>;
  --denhaag-progress-list-dot-pending-background-color: <color>;
  --denhaag-progress-list-dot-pending-border-color: <color>;
  --denhaag-progress-list-dot-pending-color: <color>;
  --denhaag-progress-list-dot-sub-danger-color: <color>;
  --denhaag-progress-list-dot-sub-neutral-color: <color>;
  --denhaag-progress-list-dot-sub-positive-color: <color>;
  --denhaag-progress-list-dot-sub-size: <length>;
  --denhaag-progress-list-dot-sub-warning-color: <color>;
  --denhaag-progress-list-dot-warning-background-color: <color>;
  --denhaag-progress-list-dot-warning-border-color: <color>;
  --denhaag-progress-list-dot-warning-icon-color: <color>;

  --denhaag-progress-list-icon-size: <length>;

  --denhaag-progress-list-label-font-weight: <number>;

  --denhaag-progress-list-marker-background-color: <color>;
  --denhaag-progress-list-marker-gap: <length>;

  --denhaag-progress-list-max-width: <length>;

  --denhaag-progress-list-step-gap: <length>;

  --denhaag-progress-list-substep-gap: <length>;
  --denhaag-progress-list-substeps-gap: <length>;
}
```
