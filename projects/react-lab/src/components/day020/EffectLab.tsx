import CleanupLab from "./CleanupLab"
import ClosureLab from "./ClosureLab"
import DepsLab from "./DepsLab"
import RaceLab from "./RaceLab"

const EffectLab = () => {
  return <>
    <DepsLab />
    <ClosureLab />
    <RaceLab />
    <CleanupLab />
  </>
}

export default EffectLab