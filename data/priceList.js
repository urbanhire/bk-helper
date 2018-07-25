module.exports = {
  trial: {
    name: 'trial',
    jobSlot: 10,
    userSlot: 5,
    payments: {
      monthly: {
        idr: 0,
        usd: 0
      },
      annual: {
        idr: 0,
        usd: 0
      }
    }
  },
  standard: {
    name: 'standard',
    jobSlot: 3,
    userSlot: 3,
    payments: {
      monthly: {
        idr: 390000,
        usd: (390000 / 14500).toFixed(0)
      },
      quarter: {
        idr: 1170000,
        usd: 81
      },
      annual: {
        idr: 3900000,
        usd: 269
      }
    }
  },
  professional: {
    name: 'professional',
    jobSlot: 20,
    userSlot: 10,
    payments: {
      monthly: {
        idr: 1190000,
        usd: 82
      },
      quarter: {
        idr: 3570000,
        usd: 246
      },
      annual: {
        idr: 14280000,
        usd: 985
      }
    }
  },
  growth: {
    name: 'growth',
    jobSlot: 50,
    userSlot: 1000,
    payments: {
      monthly: {
        idr: 2990000,
        usd: 206
      },
      quarter: {
        idr: 8970000,
        usd: 619
      },
      annual: {
        idr: 29900000,
        usd: 2062
      }
    }
  },
  enterprise: {
    name: 'enterprise',
    jobSlot: 1000,
    userSlot: 1000,
    payments: {
      monthly: {
        idr: 15990000,
        usd: 1103
      },
      quarter: {
        idr: 47970000,
        usd: 3308
      },
      annual: {
        idr: 191880000,
        usd: 13233
      }
    }
  },
  enterpriseLite: {
    name: 'enterprise-lite',
    jobSlot: 1000,
    userSlot: 1000,
    payments: {
      monthly: {
        idr: 7990000,
        usd: 551
      },
      quarter: {
        idr: 23970000,
        usd: 1653
      },
      annual: {
        idr: 95880000,
        usd: 6612
      }
    }
  },
  enterprisePremium: {
    name: 'enterprise-premium',
    jobSlot: 1000,
    userSlot: 1000,
    payments: {
      monthly: {
        idr: 15990000,
        usd: 1103
      },
      quarter: {
        idr: 47970000,
        usd: 3308
      },
      annual: {
        idr: 191880000,
        usd: 13233
      }
    }
  }
}
