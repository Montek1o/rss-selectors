import { ILevelStructure } from "../interface";

export const levels: ILevelStructure[] = [
  {
    name: 'Level 1',
    selectors: [
      {
        selector: 'circle',
        selectorId: '',
        selectorClass: '',
        active: true,
      },
      {
        selector: 'circle',
        selectorId: '',
        selectorClass: '',
        active: true,
      }
    ],
  },
  {
    name: 'Level 2',
    selectors: [
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: true,
      },
      {
        selector: 'circle',
        selectorId: '',
        selectorClass: '',
        active: false,
      },
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: true,
      }
    ]
  },
  {
    name: 'Level 3',
    selectors: [
      {
        selector: 'circle',
        selectorId: 'border',
        selectorClass: '',
        active: true,
      },
      {
        selector: 'circle',
        selectorId: '',
        selectorClass: '',
        active: false,
      },
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: false,
      }
    ]
  },
  {
    name: 'Level 4',
    selectors: [
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: false,
      },
      {
        selector: 'circle',
        selectorId: '',
        selectorClass: '',
        active: false,
        child: {
          selector: 'cigarette',
          selectorId: '',
          selectorClass: '',
          active: true,
        }
      },
      {
        selector: 'cigarette',
        selectorId: '',
        selectorClass: '',
        active: false,
      }
    ]
  },
  {
    name: 'Level 5',
    selectors: [
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: false,
        child: {
          selector: 'pickle',
          selectorId: '',
          selectorClass: '',
          active: false,
        }
      },
      {
        selector: 'circle',
        selectorId: 'border',
        selectorClass: '',
        active: false,
        child: {
          selector: 'cigarette',
          selectorId: '',
          selectorClass: '',
          active: true,
        }
      },
      {
        selector: 'circle',
        selectorId: '',
        selectorClass: '',
        active: false,
        child: {
          selector: 'cigarette',
          selectorId: '',
          selectorClass: '',
          active: false,
        }
      }
    ]
  },
  {
    name: 'Level 6',
    selectors: [
      {
        selector: 'ball',
        selectorId: '',
        selectorClass: '',
        active: false,
      },
      {
        selector: 'ball',
        selectorId: '',
        selectorClass: 'small',
        active: true,
      },
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: false,
        child: {
          selector: 'ball',
          selectorId: '',
          selectorClass: 'small',
          active: true,
        }
      },
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: false,
      }
    ]
  },
  {
    name: 'Level 7',
    selectors: [
      {
        selector: 'ball',
        selectorId: '',
        selectorClass: '',
        active: false,
      },
      {
        selector: 'ball',
        selectorId: '',
        selectorClass: 'small',
        active: false,
      },
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: false,
        child: {
          selector: 'orange',
          selectorId: '',
          selectorClass: 'small',
          active: true,
        }
      },
      {
        selector: 'circle',
        selectorId: '',
        selectorClass: '',
        active: false,
        child: {
          selector: 'orange',
          selectorId: '',
          selectorClass: '',
          active: false,
        }
      },
      {
        selector: 'circle',
        selectorId: '',
        selectorClass: '',
        active: false,
        child: {
          selector: 'orange',
          selectorId: '',
          selectorClass: 'small',
          active: true,
        }
      },
    ]
  },
  {
    name: 'Level 8',
    selectors: [
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: false,
        child: {
          selector: 'orange',
          selectorId: '',
          selectorClass: '',
          active: false,
        }
      },
      {
        selector: 'orange',
        selectorId: '',
        selectorClass: 'small',
        active: false,
      },
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: false,
        child: {
          selector: 'orange',
          selectorId: '',
          selectorClass: 'small',
          active: true,
        }
      },
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: false,
        child: {
          selector: 'ball',
          selectorId: '',
          selectorClass: 'small',
          active: false,
        }
      },
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: false,
        child: {
          selector: 'orange',
          selectorId: '',
          selectorClass: 'small',
          active: true,
        }
      },
    ]
  },
  {
    name: 'Level 9',
    selectors: [
      {
        selector: 'pickle',
        selectorId: '',
        selectorClass: 'small-pickle',
        active: false,
      },
      {
        selector: 'pickle',
        selectorId: '',
        selectorClass: '',
        active: false,
      },
      {
        selector: 'circle',
        selectorId: '',
        selectorClass: '',
        active: true,
        child: {
          selector: 'pickle',
          selectorId: '',
          selectorClass: '',
          active: false,
        }
      },
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: true,
        child: {
          selector: 'pickle',
          selectorId: '',
          selectorClass: '',
          active: false,
        }
      },
      {
        selector: 'circle',
        selectorId: '',
        selectorClass: '',
        active: true,
        child: {
          selector: 'pickle',
          selectorId: '',
          selectorClass: '',
          active: false,
        }
      },
      {
        selector: 'pickle',
        selectorId: '',
        selectorClass: '',
        active: false,
      },
    ]
  },
  {
    name: 'Level 10',
    selectors: [
      {
        selector: 'ball',
        selectorId: '',
        selectorClass: '',
        active: true,
      },
      {
        selector: 'circle',
        selectorId: '',
        selectorClass: '',
        active: true,
        child: {
          selector: 'orange',
          selectorId: '',
          selectorClass: 'small',
          active: true,
        }
      },
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: true,
      },
      {
        selector: 'square',
        selectorId: '',
        selectorClass: '',
        active: true,
        child: {
          selector: 'orange',
          selectorId: '',
          selectorClass: '',
          active: true,
        }
      },
      {
        selector: 'circle',
        selectorId: 'border',
        selectorClass: '',
        active: true,
      },
    ]
  }
];