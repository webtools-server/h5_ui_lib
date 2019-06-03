import { getLevelData } from './address';

export default {
  data() {
    return {
      choseOrder: ['province', 'city', 'area', 'town'],
      isShowCityList: false,
      regionList: [],
      chosenRegion: [],
      selected: {
        province: '',
        city: '',
        area: '',
        town: ''
      },  
    };
  },
  computed: {
    region() {
        return this.chosenRegion.filter(i => i).map(i => i.name).join(' ')
    },
    regionInfo() {
        if (!this.chosenRegion || this.chosenRegion.length == 0) {
            return {}
        }

        return this.chosenRegion.reduce((p, c, idx) => {
            p[this.choseOrder[idx]] = c && c.id || 0
            return p
        }, {})
    }
  },

  watch: {
    regionInfo(val) {
      this.selected.province = val.province 
      this.selected.city     = val.city 
      this.selected.area     = val.area || 0
      this.selected.town     = val.town || 0
    },
  },  
  methods: {
    getFullAddress(info, cb) {
      const currentInfo = info || this.defaultInfo;
      const queryProvince = [{ level: 1, code: 0 }];
      const addressCodes = this.choseOrder.map(i => currentInfo[i]).filter(i => i);
      const query = addressCodes.map((i, idx) => ({ level: idx + 2, code: i }));// .slice(0, 3)

      const getRegionDetail = (list, index) => list && list.filter((area) => area.id == (query[index] && query[index].code))[0];

      getLevelData(queryProvince.concat(query).slice(0, 4), (area) => {
        typeof cb === 'function' && cb.apply(this, [getRegionDetail, area]);
      });
    },
    getRegionList(index, code) {
      getLevelData([{ level: index + 2, code: code }], areas => {
        this.regionList.splice(index + 1, 1, areas[0]);
      });
    },
    onRegionChoseComplete(region) {
      this.chosenRegion = region;
      this.onCityListClose();
    },
    onCityListClose() {
      this.isShowCityList = false;
    },
    setDefaultAddress() {
      this.getFullAddress(this.selected, (fn, areas) => {
        this.regionList = areas
        this.chosenRegion = areas.map(fn).filter(i => i)
      })
    },    
  },
  mounted() {
    this.setDefaultAddress();
  },
  beforeRouteLeave(to, from, next) {
    this.isShowCityList = false
    next()
  },  
};
